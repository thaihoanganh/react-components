import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface IconProps extends IProps {
    size?: 'inherit' | 'large' | 'medium' | 'small';
}

const Icon: React.FC<IconProps> = (props) => {
    const { children, className, style, size = 'medium' } = props;

    const classes = classnames('icon', size && `icon-${size}`, className);
    return (
        <i className={classes} style={style}>
            {children}
        </i>
    );
};

export default Icon;
