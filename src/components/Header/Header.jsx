import React from "react";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import SignInToggler from "../SigIn/SigInToggler";
import {Link} from "react-router-dom";
import classes from "./header.module.scss";
import {auth} from "../../firebase/firebase";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/selectors";
import Cart from "../Cart/Cart";
import SigInState from "../../context/signin/SignInState";

const Header = () => {
    const currentUser = useSelector(selectCurrentUser)

    const handleSignOut = () => {
        auth.signOut()
    }

    return (
        <header className={classes.header}>
            <Link
                to="/"
                className={classes.header__logoContainer}
            >
                <Logo/>
            </Link>
            <div className={classes.header__options}>
                <Link
                    to="/"
                >
                    Home
                </Link>
                <Link
                    to="/shop"
                >
                    Shop
                </Link>
                <Link
                    to="/sale"
                >
                    Sale
                </Link>
                <Link
                    to="/about"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <div className={classes.header__icons}>
                {
                    currentUser
                        ? (
                            <div
                                onClick={handleSignOut}
                                className={classes.header__account}
                            >
                                <i className="fas fa-sign-out-alt"></i>
                            </div>
                        )
                        : (
                            <div
                                className={classes.header__account}
                            >
                                <SigInState>
                                    <SignInToggler/>
                                </SigInState>
                            </div>
                        )
                }

                <span className={classes.header__linedivide}></span>
                <Cart/>
            </div>
        </header>
    )
}

export default Header;