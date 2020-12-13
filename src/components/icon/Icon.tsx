import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface IconProps extends IProps {
    size?: 'inherit' | 'default' | 'small' | 'large';
}

const Icon: React.FC<IconProps> = (props) => {
    const { children, className, style, size = 'default' } = props;

    const classes = classnames('icon', size && `icon-${size}`, className);
    return (
        <i className={classes} style={style}>
            {children}
        </i>
    );
};

export default Icon;
