import React from 'react';
import classnames from 'classnames';

export interface RadioGroup extends IProps {}

const RadioGroup: React.FC<RadioGroup> = (props) => {
    const { children, className, style } = props;

    const classes = classnames();
    return <div></div>;
};

export default RadioGroup;
