import React, {useState} from 'react';
import Input from '../../UI/Input';

type inputProps = {
    title: string,
    label: string,
    id: string,
    type: string,
    name: string,
    value: string,
    titleId: string,
    placeholder: string,
    minLength: string,
    maxLength: string,
    onBlur: void,
    onChange: void
} 


const RegistrationInput = ({ type, value, title, id, label, placeholder }: inputProps) => {
    const [blured, setBlured] = useState(false);
    
    const handleChange = (e: any): void => {
        console.log({ [id]: e.target.value })
    }
    
    const handleBlur = (): void => {
        setBlured(true);
        console.log(blured);
    }
    
    return(
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
    )
}

export default RegistrationInput;