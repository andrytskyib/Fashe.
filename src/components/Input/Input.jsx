import React from "react";
import classes from "./input.module.scss"
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Input = (
    {
        type,
        name,
        value,
        required,
        handleChange,
        label
    }
) => {
    const labelClasses = classNames(
        [classes.formInput__label],
        {
            [classes.formInput__label_up]: value.length > 0
        }
    );
    return (
        <div className={classes.formInput}>
            <input
                type={type}
                name={name}
                value={value}
                required={required}
                onChange={handleChange}
                className={classes.formInput__input}
            />
            {
                label && (
                    <label
                        className={labelClasses}
                    >
                        {label}
                    </label>
                )
            }
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.string,
    handleChange: PropTypes.func,
    label: PropTypes.string
}

export default Input;