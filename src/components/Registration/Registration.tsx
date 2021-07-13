import React from 'react';
import RegistrationInput from './RegistrationInput'
import { CenterStyleRegAuth, DefaultDark } from '../../utils/variablesStyle';

const Registration = () => {
    const title = 'min 4 max 8, no spases, no empties';
    return (
        <DefaultDark>
            <CenterStyleRegAuth>
                <RegistrationInput
                    id="login" 
                    type="text"
                    title={title}
                    placeholder="Enter your login" 
                    label="Login" 
                />
                <RegistrationInput
                    id="password" 
                    type="password"
                    title={title}
                    placeholder="Enter your password" 
                    label="Password" 
                />
                <RegistrationInput
                    id="confirmPassword" 
                    type="password"
                    title={title}
                    placeholder="Confirm your password" 
                    label="Repeat password" 
                />
            </CenterStyleRegAuth>
        </DefaultDark>
    )
}

export default Registration;