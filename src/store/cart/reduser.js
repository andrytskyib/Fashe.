import {
    TOGGLE_CART_HIDDEN,
    ADD_CART_ITEM,
    DELETE_CART_ITEM,
    INCREASE_CART_ITEM_QUANTITY,
    DECREASE_CART_ITEM_QUANTITY
} from "./consts";

const initialState = {
    isCartDropdownHidden: true,
    cartItems: []
}

const increaseCartItemQuantity = (allCartItems, currentCartItem) => {
    let updatedItems = [];
    const isExist = allCartItems.find((cartItem) => {
        return cartItem.id === currentCartItem.id
    })

    if (isExist) {
        updatedItems = allCartItems.map((cartItem) => {
                return cartItem.id === currentCartItem.id
                    ? {...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem;
            }
        );
    } else {
        updatedItems = [...allCartItems, {...currentCartItem, quantity: 1}];
    }

    return updatedItems
}

const decreaseCartItemQuantity = (allCartItems, currentCartItem) => {
    let updatedItems = [];
    const isExist = allCartItems.find((cartItem) => {
        return cartItem.id === currentCartItem.id;
    });
    if (isExist.quantity === 1) {
        updatedItems = allCartItems.filter((cartItem) => cartItem.id !== currentCartItem.id);
    } else {
        updatedItems = allCartItems.map((cartItem) => {
            return cartItem.id === currentCartItem.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem;
        });
    }
    return updatedItems;
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isCartDropdownHidden: !state.isCartDropdownHidden
            }
        case ADD_CART_ITEM: {
            const updatedItems = increaseCartItemQuantity(state.cartItems, action.payload);

            return {
                ...state,
                cartItems: updatedItems
            }
        }
        case DELETE_CART_ITEM:
            const updatedItems = state.cartItems.filter(item => {
                return item.id !== action.payload.id
            })
            return {
                ...state,
                cartItems: updatedItems
            }
        case DECREASE_CART_ITEM_QUANTITY: {
            const updatedItems = decreaseCartItemQuantity(state.cartItems, action.payload);

            return {
                ...state,
                cartItems: updatedItems
            }
        }
        case INCREASE_CART_ITEM_QUANTITY: {
            const updatedItems = increaseCartItemQuantity(state.cartItems, action.payload);

            return {
                ...state,
                cartItems: updatedItems
            }
        }
        default:
            return state;
    }
}

export default cartReducer;