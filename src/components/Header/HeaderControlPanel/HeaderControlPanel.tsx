import React from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import { StControl } from 'src/components/Header/HeaderControlPanel/styled';
import { useTranslation } from 'react-i18next';
import { HEADER_CONTROL_BTNS } from 'src/constants/componentsConsts';
import ButtonsHeader  from '../../UI/Button/ButtonsHeader';
import { colorDefault } from '../../UI/baseLayout';
import { useTheme } from 'src/components/Hook/useTheme';
import { ROUTS_WITHOUT_STATISTICS } from '../../../constants/ui';
import { routStat } from '/src/constants/routes';


const HeaderControlPanel = () => {
        const { i18n } = useTranslation();
        const { changeTheme } = useTheme();
        const history = useHistory()
        const location = useLocation();
        const handleChangeLanguage = (e) => {
            i18n.changeLanguage(e.target.value);
            localStorage.setItem('lang', e.target.value);
        };

        const goToStats = () => {
            history.push(routStat.statistic)
        }

        const handleThemeClick = ({ target }) => {
            changeTheme();
        };

        const getFunctionForButtons = (el) => {
            switch (el.id) {
                case 'statistic': return goToStats;
                case 'theme_btn': return handleThemeClick;
                default: return handleChangeLanguage;
            }
        };
    return(
    <StControl>
        {HEADER_CONTROL_BTNS.map((el) => {
            console.log(location.pathname, ROUTS_WITHOUT_STATISTICS)
            if ((el.rout === '/statistic' && ROUTS_WITHOUT_STATISTICS.includes(location.pathname)) 
                || el.rout === location.pathname) return null;
            return (
                <ButtonsHeader
                    id={el.id}
                    content={el.content}
                    key={el.id}
                    color={colorDefault}
                    fontSize='26px'
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
