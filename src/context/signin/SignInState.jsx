import React, {useReducer, useCallback, useMemo} from "react";
import {SignInContext} from "./sigInContext";
import {TOGGLE_SIGN_IN_DROPDOWN} from "../types";
import {sigInReducer} from "./sigInReducer";

const SigInState = ({children}) => {
    const [state, dispatch] = useReducer(sigInReducer, {
        isOpen: false
    })

    const toggleSignInDropdown = useCallback(() => {
        dispatch({
            type: TOGGLE_SIGN_IN_DROPDOWN
        })
    }, [])

    const contextValues = useMemo(() => {
        return {
            isOpen: state.isOpen,
            toggleSignInDropdown
        }
    }, [
        state.isOpen,
        toggleSignInDropdown
    ])

    return (
        <SignInContext.Provider value={contextValues}>
            {children}
        </SignInContext.Provider>
    )
}

export default SigInState;