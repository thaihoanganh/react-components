import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface LayoutProps extends IProps {}

const Layout: React.FC<LayoutProps> = (props) => {
    const { children, className, style } = props;

    const classes = classnames('layout', className);
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default Layout;
