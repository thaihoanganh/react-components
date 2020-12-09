import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './style.scss';

export interface ModalProps extends IProps {
    cancelText?: string;
    closable?: boolean;
    mask?: boolean;
    maskClosable?: boolean;
    maskStyle?: React.CSSProperties;
    isOpen?: boolean;
    okText?: string;
    title?: string;
    onCancel?: () => void;
    onOk?: () => void;
}

export interface PortalInterface {
    children?: React.ReactNode;
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

const Modal: React.FC<ModalProps> = (props) => {
    const {
        children,
        className,
        style,
        isOpen,
        title,
        mask = true,
        maskStyle,
        maskClosable = true,
        cancelText = 'Cancel',
        okText = 'Ok',
        onOk,
        onCancel,
    } = props;

    const [isOpenModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        const run = setTimeout(() => {
            setOpenModal(isOpen === undefined ? false : isOpen);
        });

        return () => {
            clearTimeout(run);
        };
    }, [isOpen]);

    const handleClick = (type?: 'cancel' | 'ok') => {
        if (type === 'cancel') {
            if (onCancel) {
                setOpenModal(false);
                setTimeout(() => {
                    onCancel();
                }, 500);
            }
        } else {
            if (onOk) {
                setOpenModal(false);
                setTimeout(() => {
                    onOk();
                }, 500);
            }
        }
    };

    const modalStyle: React.CSSProperties = {
        transition: '500ms',
        ...style,
    };

    const classes = classnames('modal-root', isOpenModal && 'modal-open', className);
    return (
        <React.Fragment>
            {isOpen && (
                <Portal>
                    <div className={classes} style={modalStyle}>
                        {mask && (
                            <div
                                className="modal-mask"
                                style={maskStyle}
                                onClick={() => maskClosable && onCancel && handleClick('cancel')}
                            ></div>
                        )}
                        <div className="modal-wrap">
                            <div className="modal">
                                {title && (
                                    <div className="modal-header">
                                        <div className="modal-header-title">{title}</div>
                                        {onCancel && (
                                            <div
                                                className="modal-header-close"
                                                onClick={() => handleClick('cancel')}
                                            ></div>
                                        )}
                                    </div>
                                )}
                                <div className="modal-content">{children}</div>
                                <div className="modal-footer">
                                    {onCancel && (
                                        <button
                                            className="modal-footer-button-cancel"
                                            onClick={() => handleClick('cancel')}
                                        >
                                            {cancelText}
                                        </button>
                                    )}
                                    {onOk && (
                                        <button
                                            className="modal-footer-button-ok"
                                            onClick={() => handleClick('ok')}
                                        >
                                            {okText}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </React.Fragment>
    );
};

export default Modal;
