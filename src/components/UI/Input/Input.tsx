import React from 'react';
import { InputStyle, LabelStyle } from './styled';

type TInputProps = {
    title: string,
    labelId: string,
    id: string,
    type: string,
    name: string,
    value: string,
    titleId: string,
    placeholderId: string,
    minLength: any,
    maxLength: any,
    onBlur: any,
    onChange: any
} 


const Input = ({ title, labelId, id, type, name, value, titleId, placeholderId, minLength, maxLength, onBlur, onChange }: TInputProps) => {

    return (
        <LabelStyle>{labelId}
            <InputStyle 
                id={id}
                type={type}
                name={name}
                value={value}
                title={title}
                placeholder={placeholderId}
                minLength={minLength}
                maxLength={maxLength}
                onBlur={onBlur}
                onChange={onChange}
            />
        </LabelStyle>
    )
}

export default Input;
