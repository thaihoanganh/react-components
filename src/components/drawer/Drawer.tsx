import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './style.scss';

export interface DrawerProps extends IProps {
    title?: string;
    isOpen?: boolean;
    closable?: boolean;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    mask?: boolean;
    maskClosable?: boolean;
    maskStyle?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    zIndex?: number;
    onClose?: () => void;
}

export interface PortalInterface {
    children: React.ReactNode;
}

const Portal = (props: PortalInterface) => {
    const { children } = props;
    const el = React.useMemo(() => document.createElement('div'), []);

    React.useEffect(() => {
        el.classList.add('layout-root');
        document.body.appendChild(el);
        return () => {
            document.body.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(children, el);
};

const Drawer: React.FC<DrawerProps> = (props) => {
    const {
        children,
        className,
        style,
        title,
        isOpen,
        closable = true,
        placement = 'right',
        mask = true,
        maskClosable = true,
        maskStyle,
        width = 280,
        height = 280,
        zIndex = 999,
        onClose,
    } = props;

    const [isOpenDrawer, setOpenDrawer] = React.useState(false);

    React.useEffect(() => {
        const run = setTimeout(() => {
            setOpenDrawer(isOpen === undefined ? false : isOpen);
        });
        return () => {
            clearTimeout(run);
        };
    }, [isOpen]);

    const handleClick = () => {
        if (onClose) {
            setOpenDrawer(false);
            setTimeout(() => {
                onClose();
            }, 500);
        }
    };

    const drawerWrapStyle: React.CSSProperties = {
        top: placement === 'top' ? (isOpenDrawer ? 0 : -height) : 'initial',
        right: placement === 'right' ? (isOpenDrawer ? 0 : -width) : 'initial',
        bottom: placement === 'bottom' ? (isOpenDrawer ? 0 : -height) : 'initial',
        left: placement === 'left' ? (isOpenDrawer ? 0 : -width) : 'initial',
        width: placement === 'right' || placement === 'left' ? width : 'inherit',
        height: placement === 'top' || placement === 'bottom' ? height : 'inherit',
        transition: '450ms',
    };

    const drawerMaskStyle: React.CSSProperties = {
        opacity: isOpenDrawer ? 1 : 0,
        transition: '450ms',
        ...maskStyle,
    };

    const classes = classnames('drawer-root', className);
    return (
        <React.Fragment>
            {isOpen && (
                <Portal>
                    <div className={classes} style={{ zIndex: zIndex }}>
                        {mask && (
                            <div
                                className="drawer-mask"
                                style={drawerMaskStyle}
                                onClick={() => maskClosable && handleClick()}
                            ></div>
                        )}
                        <div className="drawer-wrap" style={drawerWrapStyle}>
                            <div className="drawer">
                                <div className="drawer-header">
                                    <div className="drawer-header-title">{title}</div>
                                    <div
                                        className="drawer-header-close"
                                        onClick={() => closable && handleClick()}
                                    ></div>
                                </div>
                                <div className="drawer-content" style={style}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </React.Fragment>
    );
};

export default Drawer;
