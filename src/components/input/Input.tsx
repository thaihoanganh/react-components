import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface InputProps extends IProps {
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
    allowClear?: boolean;
    bordered?: boolean;
    defaultValue?: string | number;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    placeholder?: string;
    size?: 'large' | 'middle' | 'small';
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
    const {
        className,
        size,
        addonAfter,
        addonBefore,
        allowClear,
        bordered,
        disabled,
        id,
        maxLength,
        placeholder,
        style,
        type = 'text',
        value,
        onChange,
    } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
    };

    const classes = classnames('input-group', className);
    return (
        <div className={classes} style={style}>
            {addonAfter && <span className="input-group-addon">{addonAfter}</span>}
            <input
                type={type}
                className="input"
                id={id}
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                disabled={disabled}
                onChange={handleChange}
            />
            {addonBefore && <span className="input-group-addon">{addonBefore}</span>}
        </div>
    );
};

export default Input;
