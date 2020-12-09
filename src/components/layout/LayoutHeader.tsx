import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface LayoutHeaderProps extends IProps {}

const LayoutHeader: React.FC<LayoutHeaderProps> = (props) => {
    const { children, className, style } = props;

    const classes = classnames('layout-header', className);
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default LayoutHeader;
