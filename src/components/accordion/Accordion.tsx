import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface AccordionProps extends IProps {
    title: React.ReactNode;
    extra?: React.ReactNode;
    showArrow?: boolean;
}

const Accordion: React.FC<AccordionProps> = (props) => {
    const { children, className, style, title, extra, showArrow = true } = props;
    const [isActive, seActive] = React.useState(true);
    const [accordionContentHeight, setAccordionContentHeight] = React.useState(0);

    const ref: any = React.useRef();

    React.useEffect(() => {
        seActive(false);
        setAccordionContentHeight(ref.current.clientHeight);
    }, []);

    const handleClick = () => {
        seActive(!isActive);
    };

    const accordionContentStyle: React.CSSProperties = {
        height: isActive ? accordionContentHeight : 0,
    };

    const classes = classnames('accordion', isActive && 'active', className);
    return (
        <div className={classes} style={style}>
            <div className="accordion-header" onClick={handleClick}>
                {showArrow && <div className="accordion-arrow"></div>}
                <div className="accordion-title">{title}</div>
                <div className="accordion-extra"></div>
            </div>
            <div className="accordion-content" style={accordionContentStyle}>
                <div className="accordion-content-wrap" ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
