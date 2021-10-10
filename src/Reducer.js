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
            localStorage.setItem('offlineState', JSON.stringify(state));
            return state;

        case "REMOVE_ITEM":
            state.products = state.products.map((data) => {
                if (action.payload === data.id && data.quantity > 0) {
                    data.quantity = data.quantity - 1;
                    data.subtotal = data.price * data.quantity;
                };
                return data;
            });
            localStorage.setItem('offlineState', JSON.stringify(state));
            return state;

        case "DELETE_ITEM":
            state.products = state.products.filter((data) => action.payload !== data.id);
            localStorage.setItem('offlineState', JSON.stringify(state));
            return state;

        case "SET_ITEM":
            state.products = state.products.map((data) => {
                if (action.payload.id === data.id) {
                    data.quantity = action.payload.value;
                    data.subtotal = data.price * data.quantity;
                };
                return data;
            });
            localStorage.setItem('offlineState', JSON.stringify(state));
            return state;

        case "SET_LOCATION":
            state.location = action.payload;
            localStorage.setItem('offlineState', JSON.stringify(state));
            return state;
        case "SET_SUMMERY":
            state.summery = action.payload;
            localStorage.setItem('offlineState', JSON.stringify(state));
            return state;
        default:
            // if (localStorage.getItem('offlineState')) {
            //     state = JSON.parse(localStorage.getItem('offlineState'));
            // };
            state.products = state.products.map(data => {
                data.subtotal = data.subtota ? data.subtota : 0;
                data.quantity = data.quantity ? data.quantity : 0;
                return data;
            });
            localStorage.setItem('offlineState', JSON.stringify(state));
            return state;
    }
};