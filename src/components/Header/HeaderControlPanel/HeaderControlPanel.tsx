import React from 'react';
import { StControl } from 'src/components/Header/HeaderControlPanel/styled';
import { useTranslation } from 'react-i18next';
import { HEADER_CONTROL_BTNS } from 'src/constants/componentsConsts';
import Button  from '../../UI/Button';
import { colorDefault } from '../../UI/baseLayout';
import { support } from '../../../helpers/support';

const HeaderControlPanel = ({ setValue }) => {
    const { i18n } = useTranslation();
    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };

    const handleThemeClick = ({ target }) => {
        support.setSessionStorageItem('themeMode', target.value);
        setValue({ name: 'themeMode', value: target.value });
    };

    const getFunctionForButtons = (el) => {
        switch (el.id) {
            case 'theme_btn': return handleThemeClick;
            default: return handleChangeLanguage;
        }
    };

    return(
        <StControl>
            {HEADER_CONTROL_BTNS.map((el) => {
                // if (el.value === themeMode) return null;
                return (
                    <Button
                        id={el.id}
                        content={el.content}
                        key={el.id}
                        color={colorDefault}
                        fontSize='26px'
                        width='60px'
                        height="10vh"
                        borderRadius="0px"
                        value={el.value}
                        bgColor="transparent"
                        onClick={getFunctionForButtons(el)}
                    />
                );
            })}
        </StControl>
    )
}

export default HeaderControlPanel;
