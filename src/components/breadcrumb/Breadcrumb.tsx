import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface BreadcrumbProps extends IProps {}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
    const { children, className, style } = props;

    const classes = classnames('breadcrumb', className);
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default Breadcrumb;
