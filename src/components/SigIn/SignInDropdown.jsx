import React, {useContext} from "react";
import classes from "./signInDropdown.module.scss";
import {useHistory} from "react-router-dom";
import Button from "../Button/Button";
import {SignInContext} from "../../context/signin/sigInContext";

const SignInDropdown = () => {
    const {push} = useHistory();

    const {isOpen, toggleSignInDropdown} = useContext(SignInContext)

    const handleGoToSignPage = (url) => {
        toggleSignInDropdown()
        push(url)
    }

    return (
        <div className={classes.signIntDropdown}>
            <Button onClick={() => handleGoToSignPage("/signup")}>Sign Up</Button>
            {}
            <Button
                onClick={() => handleGoToSignPage("/signin")}
                color="white"
                border="border"
            >
                Sign In</Button>
        </div>
    )
}

export default SignInDropdown;