import React from "react";
import {Link} from "react-router-dom";
import classes from "./footer.module.scss";
import classNames from 'classnames';

const Footer = () => {

    const footerContent = classNames(
        classes.footerContent,
        classes.footerContent_large
    )

    return (
        <footer className={classes.footer}>
            <div className={footerContent}>
                <h4>GET IN TOUCH</h4>
                <p>Any questions? Let us know in store at 8th floor, 231 Ruska St, Chernivtsi, Ukraine or call us on
                    (+38) 095 499 2674
                </p>
                <div className={classes.footerSoc}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
            <div className={classes.footerContent}>
                <h4>CATEGORIES</h4>
                <Link to={"/men"}>Men</Link>
                <Link to={"/women"}>Women</Link>
                <Link to={"/dresses"}>Dresses</Link>
                <Link to={"/sunglasses"}>Sunglasses</Link>
            </div>
            <div className={classes.footerContent}>
                <h4>LINKS</h4>
                <Link to={"/Search"}>Search</Link>
                <Link to={"/about-us"}>About Us</Link>
                <Link to={"/contact-us"}>Contact Us</Link>
                <Link to={"/returns"}>Returns</Link>
            </div>
            <div className={classes.footerContent}>
                <h4>HELP</h4>
                <Link to={"/track-order"}>Track Order</Link>
                <Link to={"/returns"}>Returns</Link>
                <Link to={"/shipping"}>Shipping</Link>
                <Link to={"/FAQs"}>FAQs</Link>
            </div>
        </footer>
    )
}

export default Footer;