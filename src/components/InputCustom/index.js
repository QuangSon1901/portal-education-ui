import React, { forwardRef } from 'react';
import { DatePicker } from 'react-rainbow-components';

const InputCustom = forwardRef(({ typeComp = 'text', className, children, ...props }, ref) => {
    let Comp = Input;
    switch (typeComp) {
        case 'button':
            Comp = Button;
            break;
        case 'text2':
            Comp = Input2;
            break;
        case 'date':
            Comp = DatePickerInput;
            break;
        default:
            break;
    }

    return <Comp children={children} className={className} {...props} />;
});

const Input = ({
    label,
    tag = 'Required',
    validate = false,
    type,
    value,
    name,
    error = '',
    placeholder = '',
    onChange,
    onBlur,
    className = '',
    ...props
}) => {
    return (
        <div className="input-custom">
            <label className={`input-custom__label-input`}>
                <span className="input-custom__label-input__span">
                    {label} {validate && <span className="input-custom__label-input__span__validate">*</span>}
                </span>
                <span className="input-custom__label-input__tag">{tag}</span>
            </label>
            <div className={`input-custom__text-input`}>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`${className} ${error && 'error'}`}
                    autoComplete="on"
                    {...props}
                />
            </div>
            <span className="input-custom__error-input">{error && error}</span>
        </div>
    );
};

const Input2 = ({ type, value, name, placeholder = '', onChange, onBlur, className = '', ...props }) => {
    return (
        <div className="input-custom">
            <div className={`input-custom__text-input`}>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`${className}`}
                    autoComplete="on"
                    {...props}
                />
            </div>
        </div>
    );
};

const DatePickerInput = ({ type, value, name, onClick, onChange, ...props }) => {
    return (
        <div className="input-custom">
            <div className={`input-custom__date-input`}>
                <DatePicker
                    formatStyle="large"
                    value={value}
                    label="DatePicker Label"
                    onChange={(value) => onChange(value)}
                    icon={<i className="bx bx-calendar"></i>}
                    className={`input-custom__date-input__container`}
                    hideLabel
                    locale="vn"
                />
            </div>
        </div>
    );
};

const Button = ({ onClick, type = 'button', className, value = '', leftIcon, rightIcon, ...props }) => {
    return (
        <div className="input-custom">
            <div className={`input-custom__button-input ${className}`}>
                <button onClick={onClick} {...props}>
                    {leftIcon && <i className={leftIcon}></i>}
                    {value && value}
                    {rightIcon && <i className={rightIcon}></i>}
                </button>
            </div>
        </div>
    );
};

export default InputCustom;
