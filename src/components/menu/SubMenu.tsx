import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface SubMenuProps extends IProps {
    title?: string;
    icon?: React.ReactNode;
    isActive?: boolean;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { children, className, style, title, icon } = props;
    const ref: any = React.useRef();
    const [isActive, setActive] = React.useState(props.isActive);
    const [scrollHeight, setScrollHeight] = React.useState(0);

    React.useEffect(() => {
        setScrollHeight(ref.current.scrollHeight);
    }, []);

    const styleNavItem: React.CSSProperties = {
        height: isActive ? scrollHeight + 58 : 48,
        ...style,
    };

    const classes = classnames('nav-item', isActive && 'active', className);
    return (
        <li className={classes} style={styleNavItem}>
            <a href="#" className="nav-link" onClick={() => setActive(!isActive)}>
                <div className="nav-item-icon">{icon}</div>
                <div className="nav-item-title">{title}</div>
                <div className="nav-item-close"></div>
            </a>
            <ul className="nav" ref={ref}>
                {children}
            </ul>
        </li>
    );
};

export default SubMenu;
