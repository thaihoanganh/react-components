import React from 'react';
import classnames from 'classnames';

export interface TabProps extends IProps {
    title: string;
}

const Tab: React.FC<TabProps> = (props) => {
    const { children, className, style } = props;
    const classes = classnames('tabs-content', className);
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default Tab;
