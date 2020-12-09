import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface MenuProps extends IProps {}

const Menu: React.FC<MenuProps> = (props) => {
    const { children, className, style } = props;

    const classes = classnames('nav', className);
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    );
};

export default Menu;
