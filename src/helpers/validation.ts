import validationRegExp from '../constants/validation'

export const validateRegField = (field: string, value: string) => {
    const {loginValidation, passwordValidation} = validationRegExp
    switch(field){
        case 'login':
            if (!loginValidation.test(String(value).toLowerCase())) {
                return 'Invalid login';
            } 
            return '';
        case 'password':
            if (!passwordValidation.test(String(value).toLowerCase())) {
                return (!value) ? 'Password can`t be empty' : 'Invalid Password';
            }
            return ''
        default:
            return ''
    }
}