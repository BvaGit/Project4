import React from 'react';
import { InputStyle, LabelStyle } from './styled';

type TInputProps = {
    title: string,
    label: string,
    id: string,
    type: string,
    name: string,
    value: string,
    placeholder: string,
    minLength: any,
    maxLength: any,
    onBlur: any,
    onChange: any
} 


const Input = ({ title, label, id, type, name, value, placeholder, minLength, maxLength, onBlur, onChange }: TInputProps) => {
    return (
        <LabelStyle>{label}
            <InputStyle 
                id={id}
                type={type}
                name={name}
                value={value}
                title={title}
                placeholder={placeholder}
                minLength={minLength}
                maxLength={maxLength}
                onBlur={onBlur}
                onChange={onChange}
            />
        </LabelStyle>
    )
}

export default Input;
