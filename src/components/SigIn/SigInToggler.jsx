import React, {useContext} from "react";
import SignInDropdown from "./SignInDropdown";
import {SignInContext} from "../../context/signin/sigInContext";

const SignInToggler = () => {

    const {isOpen, toggleSignInDropdown} = useContext(SignInContext)

    return (
        <>
            <i onClick={toggleSignInDropdown} className="fas fa-user-circle"></i>
            {isOpen && <SignInDropdown/>}
        </>
    )
}

export default SignInToggler;