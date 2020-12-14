import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './style.scss';

export interface NotificationProps extends IProps {
    title?: React.ReactNode;
    duration?: number;
    message?: React.ReactNode;
    // placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    onClose?: () => void;
    withPortal?: boolean;
}

export interface PortalInterface {
    children?: React.ReactNode;
}

export const Portal = (props: PortalInterface) => {
    const { children } = props;

    if (document.getElementById('notification-root') === null) {
        const el = document.createElement('div');
        el.setAttribute('id', 'notification-root');
        document.body.appendChild(el);
    }

    return ReactDOM.createPortal(
        children,
        document.getElementById('notification-root') as HTMLDivElement,
    );
};

const Notification: React.FC<NotificationProps> = (props) => {
    const {
        children,
        className,
        style,
        title,
        message,
        duration = 4500,
        // placement,
        onClose,
        withPortal = true,
    } = props;

    const [isOpen, setOpen] = React.useState(true);
    const [isActive, setActive] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setOpen(true);
        });

        setTimeout(() => {
            setActive(true);
        });

        setTimeout(() => {
            setActive(false);
        }, duration - 500);

        setTimeout(() => {
            setOpen(false);
        }, duration);
    }, []);

    const styleNotification: React.CSSProperties = {
        transform: isActive ? 'translateX(0px)' : 'translateX(330px)',
        transition: '500ms',
        ...style,
    };
    const classes = classnames('notification', className);

    if (isOpen) {
        if (withPortal) {
            return (
                <Portal>
                    <div className={classes} style={styleNotification}>
                        <div className="notification-content">
                            <div className="notification-title">{title}</div>
                            <div className="notification-message">{message}</div>
                        </div>
                    </div>
                </Portal>
            );
        }

        return (
            <div className={classes} style={styleNotification}>
                <div className="notification-content">
                    <div className="notification-title">{title}</div>
                    <div className="notification-message">{message}</div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Notification;
