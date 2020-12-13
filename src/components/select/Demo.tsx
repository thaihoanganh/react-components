import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './style.scss';

export interface ValueInterface {
    value: string | number;
    title: string | number;
}

export interface SelectProps extends IProps {
    allowClear?: boolean;
    defaultValue?: ValueInterface[] | [];
    disabled?: boolean;
    placeholder?: string;
    searchValue?: string;
    showArrow?: boolean;
    mode?: 'multiple' | 'tags';
    onChange?: () => void;
}

const Select: React.FC<SelectProps> = (props) => {
    const {
        className,
        style,
        allowClear = true,
        defaultValue = [],
        disabled,
        searchValue,
        showArrow,
        mode,
        onChange,
    } = props;
    const children: any = props.children;
    const data: any[] = [];
    if (children) {
        if (children.length) {
            children.map((child: any) => {
                data.push({
                    value: child.props.value,
                    title: child.props.children,
                });
            });
        } else {
            data.push({
                value: children.props.value,
                title: children.props.children,
            });
        }
    }

    const selectOptionsRef: any = React.useRef();
    const inputRef: any = React.useRef();

    const [value, setValue] = React.useState<ValueInterface[]>(defaultValue);
    const [options, setOptions] = React.useState<ValueInterface[]>(data);
    const [valueSearch, setValueSearch] = React.useState(searchValue);
    const [isOpen, setOpen] = React.useState(false);

    const handleFocus = () => {
        document.onclick = (e: any) => {
            if (e.target.dataset.select === undefined) {
                setOpen(false);
            }
        };
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(event.target.value);
        setOptions(() => {
            return data.filter((child) => {
                return child.value.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
            });
        });
    };

    const addValue = (a: any, b: any) => {
        const cloneValue = [...value];
        if (mode) {
            cloneValue.push({
                value: a,
                title: b,
            });
            setOptions(
                options.filter((child) => {
                    return child.value !== a && child.title !== b;
                }),
            );
            setValue(cloneValue);
            setValueSearch('');
        }
    };

    const removeValue = (a: any, b: any) => {
        const cloneOptions = [...options];
        if (mode) {
            cloneOptions.push({
                value: a,
                title: b,
            });
            setOptions(cloneOptions);
            setValue(
                (value as any).filter((child: any) => {
                    return child.value !== a && child.title !== b;
                }),
            );
        }
    };

    const selectOptionsDom: React.ReactNode = options.map((child: any, index: number) => {
        return (
            <li
                key={index}
                className="select-option-item"
                data-select={true}
                onClick={() => addValue(child.value, child.title)}
            >
                <span className="select-option-item-content" data-select={true}>
                    {child.title}
                </span>
            </li>
        );
    });

    const selectSelectorItemDom: React.ReactNode = (value as any).map(
        (child: any, index: number) => {
            return (
                <span key={index} className="select-selector-item">
                    <span className="select-selector-item-content" data-select={true}>
                        {child.value}
                    </span>
                    <span
                        className="select-selector-item-remove"
                        data-select={true}
                        onClick={() => removeValue(child.value, child.title)}
                    ></span>
                </span>
            );
        },
    );

    const selectOptionsStyle: React.CSSProperties = {
        height: isOpen ? 'auto' : 0,
    };
    const classes = classnames('select', className);
    return (
        <React.Fragment>
            <div className={classes} style={style}>
                <div className="select-selector">
                    {selectSelectorItemDom}
                    <span className="select-selector-search">
                        <input
                            type="textarea"
                            className="select-selector-search-input"
                            ref={inputRef}
                            data-select={true}
                            value={valueSearch}
                            onChange={handleChange}
                            onFocus={() => setOpen(true)}
                            onBlur={handleFocus}
                        />
                    </span>
                    {allowClear && (
                        <span
                            className="select-clear"
                            data-select={true}
                            onClick={() => setValueSearch('')}
                        ></span>
                    )}
                </div>
                <ul className="select-options" style={selectOptionsStyle} ref={selectOptionsRef}>
                    {selectOptionsDom}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Select;
