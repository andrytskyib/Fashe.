import React from 'react';
import CollectionItem from './CollectionItem';
import classes from './styles/collectionPreview.module.scss';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Button from "../Button/Button";

const CollectionPreview = (
    {
        title,
        items,
        routeName
    }
) => {
    const { push } = useHistory();
    const { path } = useRouteMatch();

    const handleGoToCollection = () => {
        push(`${path}/${routeName}`);
    };

    const filterItems = items.filter((item, index) => {
        return index < 4;
    });

    return (
        <div className={classes.collection}>
            <h1 className={classes.title}>{title}</h1>
            <Button
                onClick={handleGoToCollection}
                square="square"
            >
                Go to collection</Button>
            <div className={classes.preview}>
                {
                    filterItems.map((item) => {
                        return (
                            <CollectionItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                width="width"
                            />
                        );
                    })
                }
            </div>
        </div>

    );
};

CollectionPreview.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

export default CollectionPreview;