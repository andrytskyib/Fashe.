import React from 'react';
import classes from './button.module.scss';
import classNames from "classnames";
import PropTypes from 'prop-types';

const Button = (
    {
        type,
        children,
        onClick,
        color,
        square,
        border
    }
) => {
    const classOther = classNames(
        classes.button,
        {
            [classes[`button_${color}`]]: color
        },
        {
            [classes[`button_${square}`]]: square
        },
        {
            [classes[`button_${border}`]]: border
        }
    )

    return (
        <button
            type={type}
            onClick={onClick}
            className={classOther}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string
}

export default Button;