import React from "react";
import store from "../../Store"

export default function AddRemeCart(props){
    function addItem(){
        store.dispatch({
            type:"ADD_ITEM",
            payload:props.id
        })
    }

    function removeItem(){
        store.dispatch({
            type:"REMOVE_ITEM",
            payload:props.id
        })
    }
    function onDirectChange(e){
        if(e.target.value>=0){
            store.dispatch({
                type:"SET_ITEM",
                payload:{
                    id:props.id,
                    value:parseInt(e.target.value)
                }
            })
            return true
        };
        return false;
    }

    return (
        <>
            <img onClick={removeItem} alt="+" src={process.env.PUBLIC_URL + '/assets/icons/minus.png'} /><input type="text" name="change value" onChange={onDirectChange} defaultValue={props.quantity} /><img onClick={addItem} alt="+" src={process.env.PUBLIC_URL + '/assets/icons/plus.png'} />
        </>
    )
}