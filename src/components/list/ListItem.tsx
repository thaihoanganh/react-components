import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface ListItem extends IProps {
    bordered?: boolean;
}

const ListItem: React.FC<ListItem> = (props) => {
    const { children, className, style, bordered = true } = props;
    const classes = classnames('list-item', bordered && 'list-item-bordered', className);
    return (
        <li className={classes} style={style}>
            {children}
        </li>
    );
};

export default ListItem;
