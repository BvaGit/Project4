import React from 'react';
import Button from '../../UI/Button'
import { useTranslation } from "react-i18next";

const AuthBtn = ({auth} : any) => {
    const { t } = useTranslation()
    return(
        <Button 
            type="button"
            textId={t("input_signIn")}
            onClick={auth}
        />
    )
}

export default AuthBtn