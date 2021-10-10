
import './body.scss';
import store from '../../Store';
import { useEffect, useState } from 'react';
import Stepper from '../common/Stepper';
import Promotion from '../common/Promotion';
import ItemsTable from '../common/ItemsTable';
import OrderSummery from '../order-summery/OrderSummery';

export default function Body() {
    let [items, setItems] = useState([]);

    store.subscribe(() => {
        setItems(store.getState()['products'])
    });

    useEffect(() => {
        setItems(store.getState()['products'])
    }, [items]);

    return (
        <div className="container">
            <div className="col-lg-12">
                <Stepper />
                <Promotion />
                <h2>Shopping cart</h2>
                <div>
                    <ItemsTable items={items} />
                </div>
                <br />
                <br />
                <br />
                <OrderSummery />
                <br />
                <br />
            </div>
        </div>
    )
}