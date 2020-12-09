import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface CardProps extends IProps {
    title?: string;
    extra?: React.ReactNode;
    image?: string;
}

const Card: React.FC<CardProps> = (props) => {
    const { children, className, style, title, extra, image } = props;
    const classes = classnames('card', className);

    const cardHeadDom = (title || extra) && (
        <div className="card-head">
            {title && <div className="card-head-title">{title}</div>}
            {extra && <div className="card-head-extra">{extra}</div>}
        </div>
    );
    const cardImageDom = image && (
        <div className="card-image">
            <img src={image} alt="" />
        </div>
    );
    return (
        <div className={classes} style={style}>
            {cardHeadDom}
            {cardImageDom}
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Card;
