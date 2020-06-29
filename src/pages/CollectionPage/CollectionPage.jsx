import React from "react";
import {useParams} from "react-router-dom";
import classes from "./collectionPage.module.scss";
import CollectionItem from "../../components/Collection/CollectionItem";
import {useSelector} from "react-redux";
import {selectCollection} from "../../store/shop/selectors";

const CollectionPage = () => {
    const {collectionId} = useParams();

    const collection = useSelector(selectCollection(collectionId))

    return (
        collection
            ? (
                <div className={classes.collectionPage}>
                    <h2 className={classes.collectionPage__title}>{collection.title}</h2>
                    <div className={classes.collectionPage__items}>
                        {
                            collection.items.map((item) => {
                                return (
                                    <CollectionItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        imageUrl={item.imageUrl}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            )
            : null
    );
}

export default CollectionPage;