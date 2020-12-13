import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface CheckboxProps {
    children?: string;
    className?: string;
    style?: React.CSSProperties;
    defaultChecked?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { children, className, style, defaultChecked, defaultValue, disabled, onChange } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
    };

    const classes = classnames(
        'checkbox-wrapper',
        disabled && 'checkbox-wrapper-disabled',
        className,
    );
    return (
        <label className={classes} style={style}>
            <span className="checkbox">
                <input
                    type="checkbox"
                    className="checkbox-input"
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    defaultValue={defaultValue === undefined ? children : defaultValue}
                    onChange={handleChange}
                />
                <span />
            </span>
            <span>{children}</span>
        </label>
    );
};

export default Checkbox;
