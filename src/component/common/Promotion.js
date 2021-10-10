import store from "../../Store"

export default function Promotion(){
    let discout = store.getState()["discount"] 
    return (
        <div className="promotion text-center">Shop for ${discout.minTotal} or more and get {discout.discountPercentage}% discount on your order</div>
    )
}