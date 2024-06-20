import { Breadcrumbs, Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { currencyFormat } from "../../app/util/util";
// import { useStoreContext } from "../../app/context/StoreContext";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "../basket/basketSlice";
import { fetchProductAsync, productSelector } from "./productSlice";

export default function ProductDetails() {
    // const {basket, setBasket, removeItem} = useStoreContext();
    const {basket, status} = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();
    const {id} = useParams<{id: string}>();
    // const [product, setProduct] = useState<Product | null>(null);
    const product = useAppSelector((state: any) => productSelector.selectById(state, parseInt(id!)));
    // const [loading, setLoading] = useState(true);
    const {status: productStatus} = useAppSelector((state) => state.product);
    const [quantity, setQuantity] = useState(0);
    // const [submitting, setSubmitting] = useState(false);
    const item = basket?.items.find((i) => i.productId === product?.id);

    useEffect(() => {
        if (item) setQuantity(item.quantity);
        // id && agent.Catalog.details(parseInt(id))
        //     .then(response => setProduct(response))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false));
        if (!product && id) dispatch(fetchProductAsync(parseInt(id)));
        
    }, [id, item, dispatch, product]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        if (parseInt(event.currentTarget.value) >= 0) {
            setQuantity(parseInt(event.currentTarget.value));
        }
    }

    function handleUpdateCart() {
        // setSubmitting(true);
        if (!item || quantity > item.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            dispatch(addBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}));
            // agent.Basket.addItem(product?.id!, updatedQuantity)
            //     .then(basket => dispatch(setBasket(basket)))
            //     .catch(error => console.log(error))
            //     .finally(() => setSubmitting(false))
        } else {
            const updatedQuantity = item.quantity - quantity;
            dispatch(removeBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}));
            // agent.Basket.removeItem(product?.id!, updatedQuantity)
            //     .then(() => dispatch(removeItem({productId: product?.id!, quantity: updatedQuantity})))
            //     .catch(error => console.log(error))
            //     .finally(() => setSubmitting(false));
        }
    }

    if (productStatus.includes('pending')) return <LoadingComponent message="Loading product..." />

    if (!product) return <NotFound />

    
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
    }
    return (
        <>
        <div onClick={handleClick} style={{paddingBottom: '5px', paddingTop:'60px'}}>
          <Breadcrumbs aria-label="breadcrumb">
            <Button color="inherit" component={NavLink} to={'/'}>
                Home
            </Button>
            <Button color="inherit" component={NavLink} to={'/catalog'}>
                Catalog
            </Button>
            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>
        </div>
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{mb: 2}} />
                <Typography variant="h4" color='secondary.light'>{currencyFormat(product.price)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField 
                            onChange={handleInputChange}
                            variant="outlined"
                            type="number"
                            label="Quantity in Cart"
                            fullWidth
                            value={quantity}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton
                            disabled={item?.quantity === quantity || !item && quantity === 0}
                            loading={status.includes('pending')}
                            onClick={handleUpdateCart}
                            color='primary'
                            style={{height:"40px"}}
                            variant="contained"
                            fullWidth
                        >
                            {item ? 'Update Quantity' : 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}