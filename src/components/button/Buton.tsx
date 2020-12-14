import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface ButtonProps extends IProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
    fullWidth?: boolean;
    size?: 'large' | 'medium' | 'small';
    variant?: 'contained' | 'outlined' | 'text';
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        style,
        type = 'button',
        disabled = false,
        fullWidth = false,
        size = 'medium',
        variant = 'contained',
        onClick,
    } = props;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick && onClick(event);
    };

    const classes = classnames(
        'btn',
        fullWidth && 'btn-full-width',
        size && `btn-${size}`,
        variant && `btn-${variant}`,
        className,
    );
    return (
        <button
            type={type}
            className={classes}
            style={style}
            disabled={disabled}
            onClick={handleClick}
        >
            <span className="btn-label">{children}</span>
            <span className="btn-action"></span>
        </button>
    );
};

export default Button;
