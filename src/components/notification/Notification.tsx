import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './style.scss';

export interface NotificationProps {
    title?: React.ReactNode;
    message?: React.ReactNode;
    duration?: number;
}

const NotificationDom: React.FC<NotificationProps> = (props) => {
    const { title, message, duration = 4500 } = props;

    const [isOpen, setOpen] = React.useState(false);
    const [isActive, setActive] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setOpen(true);
        });

        setTimeout(() => {
            setActive(true);
        }, 350);

        setTimeout(() => {
            setActive(false);
        }, duration - 350);

        setTimeout(() => {
            setOpen(false);
        }, duration);
    }, []);

    const styleNotification: React.CSSProperties = {
        transform: isActive ? 'translateX(0px)' : 'translateX(330px)',
        transition: '350ms',
    };
    const classes = classnames('notification');

    if (isOpen) {
        return (
            <div className={classes} style={styleNotification}>
                <div className="notification-content">
                    <div className="notification-title">{title}</div>
                    <div className="notification-message">{message}</div>
                </div>
            </div>
        );
    }

    return null;
};

const Notification = (props: NotificationProps) => {
    let notificationContainer: any;
    if (document.getElementById('notification-root') === null) {
        notificationContainer = document.createElement('div');
        notificationContainer.setAttribute('id', 'notification-root');
        document.body.appendChild(notificationContainer);
    } else {
        notificationContainer = document.getElementById('notification-root');
    }

    const element = document.createElement('div');

    notificationContainer.appendChild(element);

    setTimeout(() => {
        notificationContainer.removeChild(element);
    }, props.duration || 4500);

    setTimeout(() => {
        ReactDOM.render(<NotificationDom {...props} />, element);
    });
};

export default Notification;
