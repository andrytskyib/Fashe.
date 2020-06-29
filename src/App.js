import React, {useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import "./App.css"
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import {auth, createUserProfileDocument} from "./firebase/firebase";
import {useSelector, useDispatch} from "react-redux";
import {setCurrentUser} from "./store/user/actions";
import {selectCurrentUser} from "./store/user/selectors";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const App = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser)

    let unsubscribeFromAuth = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                await createUserProfileDocument(user);
                dispatch(setCurrentUser(user))
            } else {
                dispatch(setCurrentUser(null))
            }
        });

        return () => {
            unsubscribeFromAuth();
        }
    }, [])

    return (
        <>
            <Header/>
            <main className="main">
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/signin">
                        {
                            currentUser
                                ? <Redirect to="/"/>
                                : <SignInPage/>
                        }
                    </Route>
                    <Route path="/signup">
                        <SignUpPage/>
                    </Route>
                    <Route path="/shop">
                        <ShopPage/>
                    </Route>
                    <Route exact path="/checkout">
                        <CheckoutPage/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </>
    )
}

export default App;