import React from "react";
import {Link} from "react-router-dom";
import classes from "./menuItem.module.scss"
import classNames from 'classnames';
import PropTypes from "prop-types";

const MenuItem = (
    {
        size,
        title,
        linkUrl,
        imageUrl
    }
) => {
    const menuItemClasses = classNames(
        classes.menuItem,
        {
            [classes[`menuItem_${size}`]]: size
        }
    );

    return (
        <Link
            className={menuItemClasses}
            to={`${linkUrl}`}
        >
            <div
                className={classes.menuItemInner}
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className={classes.content}>{title}</div>
        </Link>
    )
}

MenuItem.propTypes = {
    size: PropTypes.string,
    title: PropTypes.string,
    linkUrl: PropTypes.string,
    imageUrl: PropTypes.string
}

export default MenuItem;