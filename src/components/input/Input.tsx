import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface InputProps extends IProps {
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
    allowClear?: boolean;
    autoFocus?: boolean;
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    id?: string;
    maxLength?: number;
    multiline?: boolean;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    size?: 'large' | 'middle' | 'small';
    style?: React.CSSProperties;
    readOnly?: boolean;
    rows?: number;
    rowsMax?: number;
    type?: string;
    value?: string;
}

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, InputProps>((props, inputRef) => {
    const {
        addonAfter,
        addonBefore,
        allowClear,
        className,
        defaultValue,
        disabled,
        fullWidth,
        id,
        maxLength,
        name,
        onChange,
        placeholder,
        size,
        style,
        readOnly,
        type,
    } = props;

    const [value, setValue] = React.useState(props.value || defaultValue || '');

    function handleChange(event?: React.ChangeEvent<HTMLInputElement>) {
        if (event) {
            setValue(event.target.value);
            onChange && onChange(event);
        } else {
            setValue('');
        }
    }

    const classes = classnames(
        'rcat-input-group',
        fullWidth && 'rcat-input-group-full-width',
        size !== 'middle' && `rcat-input-group-${size}`,
        className,
    );

    return (
        <span className={classes} style={style}>
            {addonAfter && <span className="rcat-input-group-addon">{addonAfter}</span>}
            <span className="rcat-input-affix rcat-divider">
                <input
                    ref={inputRef}
                    type={type}
                    className="rcat-input rcat-text-default"
                    id={id}
                    name={name}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={(event) => handleChange(event)}
                />
                {allowClear && (
                    <span className="rcat-input-clear-wrapper" onClick={() => handleChange()}>
                        <span className="rcat-input-clear rcat-background-contrast"></span>
                    </span>
                )}
            </span>
            {addonBefore && (
                <span className="rcat-input-group-addon rcat-divider">{addonBefore}</span>
            )}
        </span>
    );
});

Input.defaultProps = {
    size: 'middle',
    type: 'text',
};

Input.displayName = 'Input';

export default Input;
