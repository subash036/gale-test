import AddRemeCart from "./AddRemoCart";
import Delete from "./DeleteItem";
import ImageCard from "./ImageCard";

export default function ItemsTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(eachItem => {
                    return <tr key={eachItem.id}>
                        <td scope="row">
                            <ImageCard eachItem={eachItem} />
                        </td>
                        <td>{eachItem.price}</td>
                        <td><AddRemeCart quantity={eachItem.quantity} id={eachItem.id} /></td>
                        <td><span>{eachItem.subtotal} $</span></td>
                        <td><Delete id={eachItem.id} /></td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}