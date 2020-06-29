import React from "react";
import Spinner from "../components/Spiner/Spinner";

const withSpinner = (Component) => {
    return ({isLoading, ...props}) => {
        return isLoading ? <Spinner/> : <Component {...props}/>
    }
}

export default withSpinner;