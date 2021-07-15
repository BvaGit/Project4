import validationRegExp from '../constants/validation'

export const validateRegField = (field: any, value: any) => {
    const {loginValidation, passwordValidation} = validationRegExp
    switch(field){
        case 'login':
            if (!loginValidation.test(String(value).toLowerCase())) {
                return 'Invalid login';
            } else {
                return '';
            }
        case 'password':
            if (!passwordValidation.test(String(value).toLowerCase())) {
                if (!value) {
                    return `Password can't be empty`
                }
                return 'Invalid Password';
            } else {
                return '';
            }
        default:
            return ''

    }
}