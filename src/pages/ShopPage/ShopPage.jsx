import React, {useEffect} from "react";
import {Route, useRouteMatch} from "react-router-dom";
import Collection from "../../components/Collection/Collection";
import CollectionPage from "../CollectionPage/CollectionPage";
import {useSelector, useDispatch} from "react-redux";
import {selectCollectionPreview, selectIsPending} from "../../store/shop/selectors";
import {fetchCollections} from "../../store/shop/actions";
import withSpinner from "../../hoc/withSpinner";

const CollectionWithSpinner = withSpinner(Collection);
const CollectionPageWithSpinner = withSpinner(CollectionPage)

const ShopPage = () => {
    const {path} = useRouteMatch();

    const dispatch = useDispatch();

    const {
        isPending,
        collectionPreview
    } = useSelector((state) => {
        return {
            isPending: selectIsPending(state),
            collectionPreview: selectCollectionPreview(state)
        };
    });

    useEffect(() => {
        dispatch(fetchCollections());
    }, [
        dispatch
    ]);

    return (
        <div>
            <Route exact path={path}>
                <CollectionWithSpinner
                    items={collectionPreview}
                    isLoading={isPending}
                />
            </Route>
            <Route path={`${path}/:collectionId`}>
                <CollectionPageWithSpinner
                    isLoading={isPending}
                />
            </Route>
        </div>
    )
}

export default ShopPage;