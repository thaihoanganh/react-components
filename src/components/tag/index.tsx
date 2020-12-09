import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface TagProps extends IProps {
    closable?: boolean;
    visible?: boolean;
    onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Tag: React.FC<TagProps> = (props) => {
    const { children, className, style, closable, onClose } = props;

    const [visible, setVisible] = React.useState(props.visible);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClose && onClose(event);
        closable && setVisible(false);
    };

    const classes = classnames('tag', !visible && 'tag-hidden', className);
    return (
        <div className={classes} style={style}>
            <div className="tag-content">{children}</div>
            {closable && <div className="tag-close" onClick={handleClick}></div>}
        </div>
    );
};

Tag.defaultProps = {
    visible: true,
};

export default Tag;
