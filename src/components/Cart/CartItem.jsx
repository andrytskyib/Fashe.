import React from 'react';
import classes from './styles/index.module.scss';
import {useDispatch} from "react-redux";
import {deleteItem} from "../../store/cart/actions";
import PropTypes from 'prop-types';

const CartItem = (
    {
        item
    }
) => {
    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(deleteItem(item))
    }

    return (
        <div className={classes.cartItem}>
            <div
                onClick={handleDeleteItem}
                className={classes.cartItemImage}
                style={{
                    backgroundImage: `url("${item.imageUrl}")`
                }}>
            </div>
            <div className={classes.cartItem__details}>
                <span className={classes.cartItem__name}>{item.name}</span>
                <span className={classes.cartItem__price}>{item.quantity} x ${item.price}</span>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem;
