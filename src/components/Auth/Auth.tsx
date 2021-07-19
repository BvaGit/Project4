import React from 'react';
import AuthInput from './AuthInput/';
import AuthButton from './AuthBtn/';
import { CenterStyleRegAuth, DefaultDark, TitleRegAuth, Sign } from '../../utils/variablesStyle';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Registration = () => {
    const title = 'min 1 max 25, no spaces, no empties';
    const { t } = useTranslation();
    return (
        <DefaultDark>
            <CenterStyleRegAuth>
                <TitleRegAuth>{t("label_signIn")}</TitleRegAuth>
                <AuthInput
                    id="login"
                    type="text"
                    title={title}
                    placeholder={t("login_placeholder_signIn")}
                    label={t("login_label_signIn")}
                />
                <AuthInput
                    id="password" 
                    type="password"
                    title={title}
                    placeholder={t("password_placeholder_signIn")}
                    label={t("password_label_signIn")}
                />
                <AuthButton/>
                <NavLink to='/registration'>
                    <Sign>{t("link_signUp")}</Sign>
                </NavLink>
            </CenterStyleRegAuth>
        </DefaultDark>
    )
}

export default Registration;