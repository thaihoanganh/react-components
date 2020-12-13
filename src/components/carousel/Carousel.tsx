import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface CarouselProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    autoplay?: boolean;
}

const Carousel: React.FC<CarouselProps> = (props) => {
    const { className, style, autoplay = true } = props;
    const children: any = props.children;

    const [styleLeft, setStyleLeft] = React.useState(0);
    const [isActive, setActive] = React.useState(true);
    const [key, setKey] = React.useState(0);

    const carouselRef: any = React.useRef(0);

    React.useEffect(() => {
        isActive && setStyleLeft(-carouselRef.current.offsetWidth * key);

        if (autoplay) {
            const autoplay = setTimeout(() => {
                if (isActive) {
                    if (key < children.length - 1) {
                        setKey(key + 1);
                    } else {
                        setStyleLeft(0);
                        setKey(0);
                    }
                }
            }, 5000);

            return () => {
                clearTimeout(autoplay);
            };
        }
    }, [key, isActive]);

    const classes = classnames('carousel', className);

    const carouselDotsDom =
        children &&
        children.length > 1 &&
        children.map((value: any, index: number) => {
            return (
                <li
                    key={index}
                    className={`${index === key && 'active'}`}
                    onClick={() => {
                        setKey(index);
                        setActive(true);
                    }}
                ></li>
            );
        });

    return (
        <React.Fragment>
            <div
                className={classes}
                style={style}
                ref={carouselRef}
                onMouseOver={() => setActive(false)}
                onMouseLeave={() => {
                    setActive(true);
                }}
            >
                <div className="carousel-slide" style={{ left: styleLeft }}>
                    {children}
                </div>
                <ul className="carousel-dots">{carouselDotsDom}</ul>
            </div>
        </React.Fragment>
    );
};

export default Carousel;
