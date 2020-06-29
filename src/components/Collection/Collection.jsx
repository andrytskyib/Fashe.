import React from 'react';
import CollectionPreview from './CollectionPreview';
import classes from './styles/collection.module.scss';
import PropTypes from 'prop-types';

const Collection = (
    {
        items
    }
) => {
    return (
        <div className={classes.collection}>
            {
                items.map((item) => {
                    return (
                        <CollectionPreview
                            key={item.id}
                            title={item.title}
                            items={item.items}
                            routeName={item.routeName}
                        />
                    )
                })
            }
        </div>
    );
};

Collection.propTypes = {
    items: PropTypes.array
}

export default Collection;
