import React from "react";
import store from "../../Store"

export default function Delete(props){
    function deleteItem(){
        store.dispatch({
            type:"DELETE_ITEM",
            payload:props.id
        })
    }

    return (
        <>
            <img onClick={deleteItem} alt="delete" src={process.env.PUBLIC_URL + '/assets/icons/delete.png'} />
        </>
    )
}