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
    getValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, InputProps>((props, ref) => {
    const {
        className,
        size = 'middle',
        addonAfter,
        addonBefore,
        disabled,
        id,
        maxLength,
        placeholder,
        style,
        type = 'text',
        value,
        onChange,
        getValue,
    } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        getValue && getValue(event);
    };

    const classes = classnames(
        'input-group',
        size && size !== 'middle' && `input-group-${size}`,
        className,
    );

    return (
        <div className={classes} style={style}>
            {addonAfter && <span className="input-group-addon">{addonAfter}</span>}
            <input
                ref={ref}
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
});

Input.displayName = 'Input';

export default Input;
