import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface TabsProps extends IProps {
    bordered?: boolean;
    fullWidth?: boolean;
}

const Tabs: React.FC<TabsProps> = (props) => {
    const { className, style, bordered = true, fullWidth } = props;
    const children: any | undefined = props.children;

    const ref: any = React.useRef();
    const [key, setKey] = React.useState(0);
    const [styleTabsNav, setStyleTabsNav] = React.useState({
        left: 0,
        width: 0,
    });

    React.useEffect(() => {
        if (children) {
            setStyleTabsNav({
                left: ref.current.children[0].offsetLeft,
                width: ref.current.children[0].offsetWidth,
            });
        }
    }, []);

    const handleClick = (index: number) => {
        setKey(index);
        setStyleTabsNav({
            left: ref.current.children[index].offsetLeft,
            width: ref.current.children[index].offsetWidth,
        });
    };

    const classes = classnames(
        'tabs',
        bordered && 'tabs-bordered',
        fullWidth && 'tabs-full-width',
        className,
    );

    let tabsNavDom: React.ReactNode;
    if (children) {
        if (children.length) {
            tabsNavDom = children.map((value: any, index: number) => {
                return (
                    <div className="tabs-nav-item" key={index} onClick={() => handleClick(index)}>
                        {children[index].props.title}
                    </div>
                );
            });
        } else {
            tabsNavDom = <div className="tabs-nav-item">1</div>;
        }
    }
    return (
        <div className={classes} style={style}>
            <div className="tabs-nav" style={styleTabsNav} ref={ref}>
                {tabsNavDom}
            </div>
            {children && children[key]}
        </div>
    );
};

export default Tabs;
