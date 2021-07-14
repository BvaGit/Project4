import React from 'react';
import AuthInput from './AuthInput/';
import AuthButton from './AuthBtn/';
import { CenterStyleRegAuth, DefaultDark, TitleRegAuth, Sign } from '../../utils/variablesStyle';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const title = 'min 1 max 25, no spases, no empties';
    return (
        <DefaultDark>
            <CenterStyleRegAuth>
                <TitleRegAuth>Sign in</TitleRegAuth>
                <AuthInput
                    id="login" 
                    type="text"
                    title={title}
                    placeholder="Enter your login" 
                    label="Login" 
                />
                <AuthInput
                    id="password" 
                    type="password"
                    title={title}
                    placeholder="Enter your password" 
                    label="Password" 
                />
                <AuthButton/>
                <NavLink to='/registration'>
                    <Sign>Sign up</Sign>
                </NavLink>
            </CenterStyleRegAuth>
        </DefaultDark>
    )
}

export default Registration;