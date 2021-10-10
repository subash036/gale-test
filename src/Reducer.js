import store from "./Store";

export default function dispatcher(state = store, action) {
    switch (action.type) {
        case "ADD_ITEM":
            state.products = state.products.map((data) => {
                if (action.payload === data.id) {
                    data.quantity = (data.quantity ? data.quantity : 0) + 1;
                    data.subtotal = data.price * data.quantity;
                };
                return data;
            });
            return state;

        case "REMOVE_ITEM":
            state.products = state.products.map((data) => {
                if (action.payload === data.id && data.quantity > 0) {
                    data.quantity = data.quantity - 1;
                    data.subtotal = data.price * data.quantity;
                };
                return data;
            });
            return state;

        case "DELETE_ITEM":
            state.products = state.products.filter((data) => action.payload !== data.id);
            return state;
        case "DELETE_ITEM":
            state.products = state.products.filter((data) => action.payload !== data.id);
            return state;

        case "SET_LOCATION":
            state.location = action.payload;
            return state;

        default:

            state.products = state.products.map(data => {
                data.subtotal = 0;
                data.quantity = 0;
                return data;
            })
            return state;
    }
};