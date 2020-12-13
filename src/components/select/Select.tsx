import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface SelectProps extends IProps {
    // Hiển thị nút xóa
    allowClear?: boolean;

    // Xóa nội dung trong input sau khi chọn
    autoClearSearchValue?: boolean;

    // Kiểu tùy chọn
    isMulti?: boolean;

    // Nội dung hiển thị khi không có tùy chọn nào phù hợp
    notFoundContent?: React.ReactNode;

    // Danh sách tùy chọn
    options?: ValueType | ValueType[];

    placeholder?: string;

    // Nội dung tìm kiếm mặc định
    searchValue?: string;

    // Hiển thị kí hiệu mũi tên đi xuống
    showArrow?: boolean;

    // Các tùy chọn đã chọn
    value?: ValueType[];

    // hàm được gọi khi có tùy chọn thay đổi
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ValueType {
    value: string | number;
    label: string | number;
}

const Select: React.FC<SelectProps> = (props) => {
    const {
        className,
        style,
        allowClear = true,
        autoClearSearchValue,
        isMulti = false,
        placeholder,
        notFoundContent,
        showArrow,
        onChange,
    } = props;

    const inputRef: any = React.useRef();

    const selectOptionsRef: any = React.useRef();

    const [options, setOptions] = React.useState(() => {
        return props.options === undefined ? [] : props.options;
    });

    const [value, setValue] = React.useState(() => {
        return props.value === undefined ? [] : props.value;
    });

    const [searchValue, setSearchValue] = React.useState(() => {
        return props.searchValue === undefined ? '' : props.searchValue;
    });

    const [isOpen, setOpen] = React.useState(false);

    function handleFocus() {
        document.onclick = (e: any) => {
            if (e.target.dataset.select === undefined) {
                setOpen(false);
            }
        };
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        isMulti && setSearchValue(event.target.value);
    }

    function addValue(a: any, b: any) {
        if (isMulti) {
            const cloneValue = [...value];
            cloneValue.push({
                value: a,
                label: b,
            });
            setValue(cloneValue);
            autoClearSearchValue && setSearchValue('');
        } else {
            setValue([
                {
                    value: a,
                    label: b,
                },
            ]);
            setSearchValue(b);
            setOpen(false);
        }
    }

    function removeValue(key: number) {
        const cloneValue = [...value];
        cloneValue.splice(key, 1);
        setValue(cloneValue);
    }

    const filterOptions = (options as any).filter((option: any) => {
        let check = true;
        if (option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
            (value as any).map((child: any) => {
                if (option.label === child.label) {
                    check = false;
                }
            });
        } else {
            return false;
        }
        return check;
    });

    // Render Dom
    const selectSelectorItemDom: React.ReactNode = (value as any).map(
        (child: ValueType, index: number) => {
            return (
                <span key={index} className="select-selector-item">
                    <span className="select-selector-item-content" data-select={true}>
                        {child.value}
                    </span>
                    <span
                        className="select-selector-item-remove"
                        data-select={true}
                        onClick={() => removeValue(index)}
                    ></span>
                </span>
            );
        },
    );

    const selectOptionsDom: React.ReactNode = (isMulti ? filterOptions : options).map(
        (option: any, key: number) => {
            return (
                <li
                    key={key}
                    className="select-option-item"
                    data-select={true}
                    onClick={() => addValue(option.value, option.label)}
                >
                    <span className="select-option-item-content" data-select={true}>
                        {option.label}
                    </span>
                </li>
            );
        },
    );

    const selectOptionsStyle: React.CSSProperties = {
        height: isOpen ? 'auto' : 0,
    };
    const classes = classnames('select', className);
    return (
        <div className={classes} style={style}>
            <div className="select-selector">
                {isMulti && selectSelectorItemDom}
                <span className="select-selector-search">
                    <input
                        type="textarea"
                        className="select-selector-search-input"
                        ref={inputRef}
                        data-select={true}
                        placeholder={placeholder}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setOpen(true)}
                        onBlur={handleFocus}
                    />
                </span>
                {allowClear && (
                    <span
                        className="select-clear"
                        data-select={true}
                        onClick={() => setSearchValue('')}
                    ></span>
                )}
            </div>
            <ul className="select-options" style={selectOptionsStyle} ref={selectOptionsRef}>
                {selectOptionsDom}
            </ul>
        </div>
    );
};

export default Select;
