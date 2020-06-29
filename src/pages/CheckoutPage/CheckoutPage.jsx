import React from "react";
import classes from "./checkout.module.scss";
import {useSelector} from "react-redux";
import {selectCartItems, selectTotalPrice} from "../../store/cart/selectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const CheckoutPage = () => {
    const {
        cartItems,
        totalPrice
    } = useSelector((state)=> {
        return {
            cartItems: selectCartItems(state),
            totalPrice: selectTotalPrice(state)
        }
    })

    return (
        <div className={classes.checkoutPage}>
            <div className={classes.checkoutPage__header}>
                <div className={classes.checkoutPage__headerBlock}>
				   <span>
					  Product
				   </span>
                </div>
                <div className={classes.checkoutPage__headerBlock}>
				   <span>
					  Description
				   </span>
                </div>
                <div className={classes.checkoutPage__headerBlock}>
				   <span>
					  Quantity
				   </span>
                </div>
                <div className={classes.checkoutPage__headerBlock}>
				   <span>
					  Price
				   </span>
                </div>
                <div className={classes.checkoutPage__headerBlock}>
				   <span>
					  Remove
				   </span>
                </div>
            </div>

            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem
                            key={cartItem.id}
                            item={cartItem}
                        />
                    )
                })
            }

            <div className={classes.checkoutPage__total}>
                {`Total: $${totalPrice}`}
            </div>
        </div>
    );
};

export default CheckoutPage;