import React from "react";
import classes from "./menu.module.scss";
import MenuItem from "../MenuItem/MenuItem";
import {SECTIONS} from "./consts";

const Menu = () => {

    return (
        <div className={classes.menu}>
            {
                SECTIONS.map(item => {
                    return (
                        <MenuItem
                            key={item.id}
                            size={item.size}
                            title={item.title}
                            linkUrl={item.linkUrl}
                            imageUrl={item.imageUrl}
                        />
                    )
                })
            }
        </div>
    )
}

export default Menu;