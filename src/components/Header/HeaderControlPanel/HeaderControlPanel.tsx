import React from 'react';
import { StControl } from 'src/components/Header/HeaderControlPanel/styled';
// import { useTranslation } from 'react-i18next';
import { HEADER_CONTROL_BTNS } from 'src/constants/componentsConsts';
import ButtonsHeader  from '../../UI/Button/ButtonsHeader';
import { colorDefault } from '../../UI/baseLayout';


const HeaderControlPanel = () => {
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
                    onClick={onclick}
                />
            );
        })}
    </StControl>
    )
}

export default HeaderControlPanel;
