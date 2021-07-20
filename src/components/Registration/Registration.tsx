import React from 'react';
import RegistrationInput from './RegistrationInput';
import RegistrationButton from './RegistrationButton';
import { CenterStyleRegAuth, DefaultDark, TitleRegAuth, Sign } from '../../utils/variablesStyle';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Registration = () => {
    const { t } = useTranslation()
    return (
        <DefaultDark>
            <CenterStyleRegAuth>
                <TitleRegAuth>{t("reg_label_signUp")}</TitleRegAuth>
                <RegistrationInput
                    id="login" 
                    type="text"
                    title={t("title_auth")}
                    placeholder={t("reg_input")}
                    label={t("reg_label")}
                />
                <RegistrationInput
                    id="password" 
                    type="password"
                    title={t("title_auth")}
                    placeholder={t("reg_place_password")}
                    label={t("reg_label_pass")}
                />
                <RegistrationInput
                    id="confirmPassword" 
                    type="password"
                    title={t("title_auth")}
                    placeholder={t("reg_place_password_conf")}
                    label={t("reg_label_confirm")}
                />
                <RegistrationButton/>
                <NavLink to='/'>
                    <Sign>{t("reg_link")}</Sign>
                </NavLink>
            </CenterStyleRegAuth>
        </DefaultDark>
    )
}

export default Registration;