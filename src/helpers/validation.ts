import validationRegExp from '../constants/validation'
import i18n from 'i18next';

export const validateRegField = (field: string, value: string) => {
    const {loginValidation, passwordValidation} = validationRegExp
    switch(field){
        case 'login':
            if (!loginValidation.test(String(value).toLowerCase())) {
                return i18n.t('notification_invalid_login');
            } 
            return '';
        case 'password':
            if (!passwordValidation.test(String(value).toLowerCase())) {
                return (!value)
                    ? i18n.t('notification_invalid_password_empty')
                    : i18n.t('notification_invalid_password');
            }
            return ''
        default:
            return ''
    }
}