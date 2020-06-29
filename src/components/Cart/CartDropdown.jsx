import React from 'react';
import classes from "./styles/cartDropdown.module.scss";
import Button from "../Button/Button";
import {useSelector, useDispatch} from "react-redux";
import CartItem from "./CartItem";
import {selectCartItems} from "../../store/cart/selectors";
import {toggleCartHidden} from "../../store/cart/actions";
import {useHistory} from "react-router-dom";

const CartDropdown = () => {
    const {push} = useHistory();

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems)

    const handleGoCheckoutPage = () => {
        dispatch(toggleCartHidden())
        push("/checkout")
    }

    return (
        <div className={classes.cartDropdown}>
            <div className={classes.cartDropdown__items}>
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CartItem
                                key={cartItem.id}
                                item={cartItem}
                            />
                        );
                    })
                }
            </div>
            <Button onClick={handleGoCheckoutPage}>
                Go to checkout
            </Button>
        </div>
    )
}

export default CartDropdown;