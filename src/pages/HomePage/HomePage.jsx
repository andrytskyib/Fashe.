import React from "react";
import classes from "./homePage.module.scss"
import Menu from "../../components/Menu/Menu";
import SlickSlider from "../../components/SlickSlider/SlickSlider";

const HomePage = () => {
    return (
        <>
            <section>
                <SlickSlider/>
            </section>
            <section className={classes.homePage}>
                <Menu/>
            </section>
        </>
    )
}

export default HomePage;