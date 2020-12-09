import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface BreadcrumbItemProps extends IProps {
    isActive?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
    const { children, className, style, isActive } = props;

    const classes = classnames('breadcrumb-item', isActive && 'active', className);
    return (
        <div className={classes} style={style}>
            <span className="breadcrumb-link">{children}</span>
            <span className="breadcrumb-separator">/</span>
        </div>
    );
};

export default BreadcrumbItem;
