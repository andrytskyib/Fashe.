import React from "react";
import classes from "./styles/cart.module.scss";
import CartDropdown from "./CartDropdown";
import {useSelector, useDispatch} from "react-redux";
import {toggleCartHidden} from "../../store/cart/actions";
import {selectIsCartDropdownHidden, selectQuantity} from "../../store/cart/selectors";

const Cart = () => {
    const dispatch = useDispatch();

    const {
        isCartDropdownHidden,
        cartItemsQuantity
    } = useSelector((state) => {
        return {
            isCartDropdownHidden: selectIsCartDropdownHidden(state),
            cartItemsQuantity: selectQuantity(state)
        };
    });

    const toggleCart = () => {
        dispatch(toggleCartHidden())
    }

    return (
        <>
            <div
                onClick={toggleCart}
                className={classes.cart}
            >
                <i className="fas fa-shopping-bag"></i>
                <span className={classes.cart__itemCount}>{cartItemsQuantity}</span>
            </div>
            {
                !isCartDropdownHidden && <CartDropdown/>
            }
        </>
    )
}

export default Cart;