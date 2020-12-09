import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface ListProps extends IProps {
    title?: string;
    size?: 'large' | 'medium' | 'small';
}

const List: React.FC<ListProps> = (props) => {
    const { children, className, style, title, size } = props;

    const classes = classnames('list', className);
    return (
        <div className={classes} style={style}>
            {title && (
                <div className="list-header">
                    <div className="list-header-title">{title}</div>
                </div>
            )}
            <ul className="list-items">{children}</ul>
        </div>
    );
};

export default List;
