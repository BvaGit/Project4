import React from 'react';

import Button from '../../UI/Button'

const AuthBtn = ({auth} : any) => {
    return(
        <Button 
            type="button"
            textId="SIGN IN"
            onClick={auth}
        />
    )
}


export default AuthBtn