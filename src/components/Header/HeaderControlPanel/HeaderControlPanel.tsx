import React from 'react';
import { StControl } from 'src/components/Header/HeaderControlPanel/styled';
import { useTranslation } from 'react-i18next';
import { HEADER_CONTROL_BTNS } from 'src/constants/componentsConsts';
import ButtonsHeader  from '../../UI/Button/ButtonsHeader';
import { colorDefault } from '../../UI/baseLayout';
import { useTheme } from 'src/components/Hook/useTheme';


const HeaderControlPanel = () => {
        const { i18n } = useTranslation();
        const { changeTheme } = useTheme();
        const handleChangeLanguage = (e) => {
            i18n.changeLanguage(e.target.value);
            localStorage.setItem('lang', e.target.value);
        };

        const handleThemeClick = ({ target }) => {
            changeTheme();
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
                <ButtonsHeader
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
