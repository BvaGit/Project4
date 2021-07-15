import React from 'react';
import RegistrationInput from './RegistrationInput';
import RegistrationButton from './RegistrationButton';
import { CenterStyleRegAuth, DefaultDark, TitleRegAuth, Sign } from '../../utils/variablesStyle';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const title = 'min 1 max 25, no spases, no empties';
    return (
        <DefaultDark>
            <CenterStyleRegAuth>
                <TitleRegAuth>Sigin up</TitleRegAuth>
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
                <RegistrationButton/>
                <NavLink to='/'>
                    <Sign>Sign in</Sign>
                </NavLink>
            </CenterStyleRegAuth>
        </DefaultDark>
    )
}

export default Registration;