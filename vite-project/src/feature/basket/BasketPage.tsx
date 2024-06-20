import { Button, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
    // const {basket, setBasket, removeItem} = useStoreContext();
    const {basket} = useAppSelector(state => state.basket);
    // const [loading, setLoading] = useState(false);

    // function handleAddItem(productId: number) {
    //     setLoading(true);
    //     agent.Basket.addItem(productId)
    //         .then(basket => dispatch(setBasket(basket)))
    //         .catch(error => console.log(error))
    //         .finally(() => setLoading(false));
    // }

    // function handleRemoveItem(productId: number, quantity = 1) {
    //     setLoading(true);
    //     agent.Basket.addItem(productId, quantity)
    //         .then(() => dispatch(removeItem({productId, quantity})))
    //         .catch(error => console.log(error))
    //         .finally(() => setLoading(false));
    // }
    
    if (!basket || basket.items.length === 0) return <Typography variant="h3" style={{paddingTop: '80px'}}>Your basket is empty.</Typography>

    return (
      <div style={{paddingTop: '80px'}}>
        <BasketTable items={basket.items} />
        <Grid container>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <BasketSummary />
            <Button
              component={Link}
              to='/checkout'
              variant="contained"
              size="large"
              fullWidth
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </div>
    )
}