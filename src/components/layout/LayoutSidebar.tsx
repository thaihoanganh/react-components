import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface LayoutSidebarProps extends IProps {}

const LayoutSidebar: React.FC<LayoutSidebarProps> = (props) => {
    const { children, className, style } = props;

    const classes = classnames('layout-sidebar', className);
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default LayoutSidebar;
