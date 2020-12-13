import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './style.scss';

export interface NotificationProps extends IProps {
    description?: React.ReactNode;
    duration?: number;
    message?: React.ReactNode;
    // placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    onClose?: () => void;
}

export interface PortalInterface {
    children?: React.ReactNode;
    isActive?: boolean;
}

if (document.getElementById('notification-root') === null) {
    const el = document.createElement('div');
    el.setAttribute('id', 'notification-root');
    document.body.appendChild(el);
}

const Portal = (props: PortalInterface) => {
    const { children, isActive } = props;
    return ReactDOM.createPortal(children, document.getElementById('notification-root') as any);
};

const Notification: React.FC<NotificationProps> = (props) => {
    const {
        children,
        className,
        style,
        description,
        message,
        duration = 4500,
        // placement,
        onClose,
    } = props;

    const ref: any = React.useRef();

    const [isOpen, setOpen] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        });

        setTimeout(() => {
            setOpen(false);
        }, duration);
    }, []);

    const styleNotification: React.CSSProperties = {
        transform: isOpen ? 'translateX(0px)' : 'translateX(330px)',
        ...style,
    };
    const classes = classnames('notification', className);
    return (
        <Portal isActive={true}>
            <div className={classes} style={styleNotification}>
                <div className="notification-content">
                    <div className="notification-description">{description}</div>
                    <div className="notification-message">{message}</div>
                </div>
            </div>
        </Portal>
    );
};

export default Notification;
