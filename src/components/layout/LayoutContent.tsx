import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface LayoutContentProps extends IProps {}

const LayoutContent: React.FC<LayoutContentProps> = (props) => {
    const { children, className, style } = props;

    const classes = classnames('layout-content', className);
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default LayoutContent;
