import {createSelector} from 'reselect';

const selectCart = (state) => state.cart;

export const selectIsCartDropdownHidden = createSelector(
    [selectCart],
    (cart) => cart.isCartDropdownHidden
);

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectQuantity = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
);

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((result, item) => result + item.price*item.quantity, 0)
)
