import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";
import NotFound from "../../app/errors/NotFound";
import { toast } from "react-toastify";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
  // const [loading, setLoading] = useState(false);
  // const {setBasket} = useStoreContext();
  const {status} = useAppSelector((state: { basket: any; }) => state.basket);
  const dispatch = useAppDispatch();
  const productSplit = product.name.split(' ');
  let productInitials = '';
  for (let i=0; i<productSplit.length; i++) {
    productInitials += productSplit[i].charAt(0).toUpperCase();
  }

  // function handleAddItem(productId: number) {
  //   setLoading(true);
  //   agent.Basket.addItem(productId)
  //     .then(basket => dispatch(setBasket(basket)))
  //     .catch(error => console.log(error))
  //     .finally(() => setLoading(false));
  // }
  return (
    <>
    {product.name.charAt(0) ? (
      <Card>
          <CardHeader 
              avatar={
                  <Avatar sx={{bgcolor: 'secondary.light', fontSize: '12px'}}>
                      {productInitials}
                  </Avatar>
              }
              title={product.name}
              titleTypographyProps={{
                  sx: {fontWeight: 'bold', color: 'primary.light'}
              }}
              component={Link} to={`/catalog/${product.id}`}
              style={{textDecoration: 'none'}}
              /> 
        <CardMedia
          sx={{ height: 140, backgroundSize: 'contain', bgcolor: '#90d5db'}}
          image={product.pictureUrl}
          title={product.name}
          component={Link} to={`/catalog/${product.id}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color='secondary.light'>
            {currencyFormat(product.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton 
            loading={status==='pendingAddItem' + product.id} 
            onClick={() => {
              dispatch(addBasketItemAsync({productId: product.id}))
              .then(() => toast.success("You have successfully added an item to cart."));
            }} 
            size="small">Add to cart</LoadingButton>
          <Button size="small" component={Link} to={`/catalog/${product.id}`}>View</Button>
        </CardActions>
      </Card>
    ) : (
      <NotFound />
    )}
    </>
    )
}