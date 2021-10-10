import { useState } from "react";
import store from "../../Store";
import "./delivery.scss";
export default function Delivery() {
    let [location, setLocation] = useState({});
    let [touched, setTouched] = useState(false);
    function getLocation(e) {
        let obj = store.getState()["pincode"][e.target.value];
        if (obj) {
            setLocation(store.getState()["pincode"][e.target.value]);
            obj["pincode"] = e.target.value;
        } else {
            setLocation({});
        };
        if(e.target.value !=="" && !obj){
            setTouched(true);
        }else{
            setTouched(false);
        }
        store.dispatch({
            type: "SET_LOCATION",
            payload: obj ? obj : {}
        })
    };

    return (
        <div className="delivery">
            <div><img alt="Check mark" src={process.env.PUBLIC_URL + '/assets/icons/LOCATION.png'} /><input onChange={getLocation} className="location" type="text" /><input className="button" type="button" value="CHANGE" name="CHANGE" /></div>
            <div className="updates">
                <ul>
                    {location.deliveryPrice === 0 && <li><img alt="Check mark" src={process.env.PUBLIC_URL + '/assets/icons/check.png'} />
                        Free Delivery</li>}
                    {location.cashOnDelivery && <li><img alt="Check mark" src={process.env.PUBLIC_URL + '/assets/icons/check.png'} /> Cash on Delivery</li>}
                    {location.estimatedDays && <li><img alt="Check mark" src={process.env.PUBLIC_URL + '/assets/icons/check.png'} /> Esteemed Delivery time is {location.estimatedDays.min}-{location.estimatedDays.max} days</li>}
                    {touched && <li className="red">Delivery not available in your location</li>}
                </ul>
            </div>
        </div>
    )
}