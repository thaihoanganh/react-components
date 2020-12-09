import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface ButtonProps extends IProps {
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
        disabled,
        fullWidth,
        size = 'medium',
        variant = 'contained',
        onClick,
    } = props;

    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onClick && onClick(event);
    }

    const classes = classnames(
        'btn',
        fullWidth && 'btn-full-width',
        size && `btn-${size}`,
        variant && `btn-${variant}`,
        className,
    );
    return (
        <button className={classes} style={style} disabled={disabled} onClick={handleClick}>
            <span className="btn-label">{children}</span>
            <span className="btn-action"></span>
        </button>
    );
};

export default Button;
