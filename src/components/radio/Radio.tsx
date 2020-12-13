import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface RadioProps extends IProps {
    // children?: string;
    // className?: string;
    // style?: React.CSSProperties;
    defaultChecked?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = (props) => {
    const { children, className, style, defaultChecked, defaultValue, disabled, onChange } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
    };

    const classes = classnames('radio-wrapper', disabled && 'radio-wrapper-disabled', className);
    return (
        <label className={classes} style={style}>
            <span className="radio">
                <input
                    type="radio"
                    name="radio"
                    className="radio-input"
                    disabled={disabled}
                    defaultChecked={defaultChecked}
                    defaultValue={defaultValue}
                    onChange={handleChange}
                />
                <span />
            </span>
            <span>{children}</span>
        </label>
    );
};

export default Radio;
