import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface AlertProps extends IProps {
    closable?: boolean;
    onClose?: () => void;
}

const Alert: React.FC<AlertProps> = (props) => {
    const { children, className, style, closable = true, onClose } = props;

    const [isOpen, setActive] = React.useState(true);

    const handleClick = () => {
        setActive(false);
        onClose && onClose();
    };

    const classes = classnames('alert', !isOpen && 'alert-hidden', className);
    return (
        <div className={classes} style={style}>
            <div className="alert-wrapper">
                <div className="alert-content">{children}</div>
                {closable && <div className="alert-close" onClick={handleClick}></div>}
            </div>
        </div>
    );
};

export default Alert;
