import React from 'react';
import classes from './styles/collectionItem.module.scss';
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../store/cart/actions";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CollectionItem = (
    {
        id,
        name,
        price,
        imageUrl,
        width
    }
) => {
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItemToCart({
            id,
            name,
            price,
            imageUrl
        }));
    };

    const menuItemClasses = classNames(
        classes.collectionItem,
        {
            [classes[`collectionItem_${width}`]]: width
        }
    );

    return (
        <div className={menuItemClasses}>
            <div className={classes.imageWrapper}>
                <div
                    className={classes.collectionItem__image}
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
            </div>
            <div className={classes.collectionItem__footer}>
                <span className={classes.collectionItem__name}>{name}</span>
                <span className={classes.collectionItem__price}>{`${price}$`}</span>
            </div>
            <div
                className={classes.content}
                onClick={handleAddItem}
            >
                Add to Cart
            </div>
        </div>

    );
};

CollectionItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string
}

export default CollectionItem;