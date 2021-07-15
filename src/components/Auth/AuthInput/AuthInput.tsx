import React, {useState} from 'react';
import Input from '../../UI/Input';
import { validateRegField } from '/src/helpers/validation'
import { BlockInput, NoValidStyle } from './styled';

type inputProps = {
    title: string,
    label: string,
    id: string,
    type: string,
    name: string,
    value: string,
    titleId: string,
    placeholder: string,
    minLength: any,
    maxLength: any,
    onBlur: void,
    onChange: void,
    changeField: any,
    setError: any,
    error: any
} 


const AuthInput = ({ type, value, title, id, label, placeholder, changeField, setError, error }: inputProps) => {
    const [blured, setBlured] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        changeField({ [id]: e.target.value });
        if(blured) setBlured(false);
    }
    
    const handleBlur = (): void => {
        setBlured(true);
        setError({[id]: validateRegField(id, value) })
    }
    
    return(
        <>
            <BlockInput>
                < Input 
                    labelId={label} 
                    type={type} 
                    name={id}
                    value={value}
                    titleId={title}
                    placeholderId={placeholder} 
                    minLength="1"
                    maxLength="30"
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                < NoValidStyle>
                    {(blured && error) && <div>{error}</div>}
                </NoValidStyle>
            </BlockInput>
        </>
    )
}

export default AuthInput;