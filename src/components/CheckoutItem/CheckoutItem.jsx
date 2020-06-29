import React from "react";
import classes from "./checkoutItem.module.scss"
import {
    deleteItem,
    decreaseCartItemQuantity,
    increaseCartItemQuantity
} from "../../store/cart/actions";
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';

const CheckoutItem = (
    {
        item
    }
) => {
    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(deleteItem(item))
    }

    const handleIncreaseItem = () => {
        dispatch(increaseCartItemQuantity(item))
    }

    const handleDecreaseItem = () => {
        dispatch(decreaseCartItemQuantity(item))
    }

    return (
        <div className={classes.checkoutItem}>
            <div className={classes.checkoutItem__imageContainer}>
                <img src={item.imageUrl} alt="item"/>
            </div>
            <span className={classes.checkoutItem__name}>{item.name}</span>

            <span className={classes.checkoutItem__quantity}>
			   <div
                   onClick={handleDecreaseItem}
                   className={classes.checkoutItem__quantityArrow}
               >
				   &#10094;
			   </div>
			   <span className={classes.checkoutItem__quantityValue}>{item.quantity}</span>
			   <div
                   onClick={handleIncreaseItem}
                   className={classes.checkoutItem__quantityArrow}
               >
				   &#10095;
			   </div>
			</span>

            <span className={classes.checkoutItem__price}>{item.price}</span>
            <div
                onClick={handleDeleteItem}
                className={classes.checkoutItem__removeButton}
            >
                &#10005;
            </div>
        </div>
    );
};

CheckoutItem.propTypes = {
    item: PropTypes.object
}

export default CheckoutItem;