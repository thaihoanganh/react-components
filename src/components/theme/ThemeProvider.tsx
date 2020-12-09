import React from 'react';

import './style.scss';

const ThemeProvider: React.FC<IProps> = (props) => {
    const { children, style } = props;
    return <div style={style}>{children}</div>;
};

export default ThemeProvider;
