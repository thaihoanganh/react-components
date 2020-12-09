import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './style.scss';

export interface MenuItemProps extends IProps {
    path: string;
    exact?: boolean;
    icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { children, className, style, path, exact, icon } = props;

    const classes = classnames('nav-item', className);
    return (
        <li className={classes} style={style}>
            <NavLink exact={exact} to={path} className="nav-link">
                <div className="nav-item-icon">{icon}</div>
                <div className="nav-item-title">{children}</div>
                <div className="nav-item-icon"></div>
            </NavLink>
        </li>
    );
};

export default MenuItem;
