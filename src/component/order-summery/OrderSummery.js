import { useEffect, useState } from "react";
import store from "../../Store";
import Delivery from "../delivery-summery/Delivery";
import "./ordersummery.scss";

export default function OrderSummery(props) {

    let [summeryDetails, setSummery] = useState({
        subtotal: 0,
        totalDiscount: 0,
        standardShipping: 0,
        total: 0,
        cartItemCount: 0,
        location: {}
    });

    // useEffect(()=>{
    store.subscribe(() => {
        let total = 0;
        let count = 0;
        store.getState()['products'].forEach(element => {
            if (element.subtotal) {
                total = total + element.subtotal;
                count = count + 1;
            };
        });

        let location = store.getState()['location'];
        let discount = store.getState()['discount'];

        let shippingCharge = parseInt(location && location.deliveryPrice ? location.deliveryPrice : 0);
        let totalDiscunt = parseInt(total) >= parseInt(discount.minTotal) ? ((discount.discountPercentage / 100) * total).toFixed(0) : 0;
        let totalCartValue = total + shippingCharge - parseInt(totalDiscunt);
        location = location ? location : {};
        setSummery({
            subtotal: total,
            totalDiscount: totalDiscunt,
            standardShipping: shippingCharge,
            total: totalCartValue,
            location: location,
            cartItemCount: count
        });
        // store.dispatch({
        //     type:"SET_SUMMERY",
        //     payload:summeryDetails
        // })
    });
    // },[summeryDetails])

    if (store.getState()['summery']) {
        setSummery(store.getState()['summery']);
    }
    return (
        <div className="row order-summery">
            <div className="col-lg-4">
                <Delivery />
            </div>
            <div className="col-lg-3">
                &nbsp;
            </div>
            <div className="col-lg-5">
                <h4>Order Summery({summeryDetails.cartItemCount} items)</h4>
                <div className="row">
                    <div className="col-lg-6 text-left">Subtotal</div>
                    <div className="col-lg-6 text-right">{summeryDetails.subtotal} $</div>
                    <div className="col-lg-6 text-left">Total Discount</div>
                    <div className="col-lg-6 text-right">-{summeryDetails.totalDiscount} $</div>
                    <div className="col-lg-6 text-left">Standard Shipping</div>
                    <div className="col-lg-6 text-right">{summeryDetails.standardShipping > 0 ? summeryDetails.standardShipping + " $" : 'Free'}</div>
                    <br />
                    <br />
                    <div className="col-lg-12 total">
                        <div className="row">
                            <div className="col-lg-6 text-left">Order Total</div>
                            <div className="col-lg-6 text-right"><h1>{summeryDetails.total} $</h1></div>
                        </div>
                    </div>
                    <br />
                    <br /><br />
                    <div className="col-lg-6 text-left"><a href="/">Continue Shopping</a></div>
                    <div className="col-lg-6 text-right"><button disabled={!summeryDetails.location.pincode || summeryDetails.cartItemCount <= 0} className="btn btn-primary">CHECKOUT</button></div>
                </div>
            </div>
        </div>
    )
}