import React from 'react';

import Button from '../../UI/Button'
import { useTranslation } from 'react-i18next';

const RegistrationButton = ({register} : any) => {
    const { t } = useTranslation()
    return(
        <Button 
            type="button"
            textId={t("link_signUp")}
            onClick={register}
        />
    )
}

export default RegistrationButton