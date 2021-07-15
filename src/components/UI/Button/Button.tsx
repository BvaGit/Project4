import React from 'react';
import { useTranslation } from 'react-i18next';
import { StButton } from './styled';
import { IButton } from 'src/components/UI/Button/types';
import { ButtonStyle } from './styled';

const ButtonHeader = ({
                    id,
                    name,
                    onClick,
                    title,
                    type = 'button',
                    value,
                    borderRadius,
                    isDisabled,
                    color,
                    fontSize,
                    bgColorDisabled,
                    bgColor,
                    height,
                    width,
                    padding,
                    margin,
                    content,
                    transition,
                    focusColor,
                } : IButton) => {
    const { t } = useTranslation();
    return (
        <StButton
            id={id}
            name={name}
            onClick={onClick}
            type={type}
            value={value}
            title={title}
            bgColorDisabled={bgColorDisabled}
            borderRadius={borderRadius}
            disabled={isDisabled}
            color={color}
            fontSize={fontSize}
            bgColor={bgColor}
            height={height}
            width={width}
            padding={padding}
            margin={margin}
            transition={transition}
            focusColor={focusColor}
        >
            {t(content)}
        </StButton>
    );
};

type TButtonProps = {
    type: "submit" | "button",
    textId: string,
    onClick: void
}

const Button = ({type, textId, onClick}: TButtonProps) => {
    return (
        <ButtonStyle 
            type={type}
            onClick={onClick}
        >
            {textId}
        </ButtonStyle>
    )
}


export default Button;
