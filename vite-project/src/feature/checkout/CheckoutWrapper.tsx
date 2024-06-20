import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../app/store/configureStore";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { setBasket } from "../basket/basketSlice";
import LoadingComponent from "../../app/layout/LoadingComponent";

const stripPromise = loadStripe('pk_test_51O5062B8X1XvrI2hnPaFOc4AJ8xYJByRIt1MMjUPCbruyRubYTJWp6SWFTMWit2iG6QQzuEAdTc60VGs95mJm4fw00CCUFhRLO');

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [dispatch]);

    if (loading) return <LoadingComponent message="Loading checkout..." />

    return (
        <Elements stripe={stripPromise}>
            <CheckoutPage />
        </Elements>
    )
}