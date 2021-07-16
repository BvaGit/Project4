import React from 'react';

import Button from '../../UI/Button'

const RegistrationButton = ({register} : any) => {
    return(
        <Button 
            type="button"
            textId="SIGN UP"
            onClick={register}
        />
    )
}

export default RegistrationButton