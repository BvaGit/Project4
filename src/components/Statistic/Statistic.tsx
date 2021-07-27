import React,{useEffect,useMemo} from 'react';
import { useTranslation } from 'react-i18next';
import {IStatUUID} from '../../store/statistic/types'
import StatisticTable from './StatisticTable';
import { StContainer, StHeaderWrapper } from './styled';

interface IProps{
    statisticData: Array<IStatUUID> ,
    isStatistic:()=>void
}

const Statistic: React.FC<IProps> = ({statisticData,isStatistic}:IProps) => {
    useEffect(() => {
        isStatistic();
    }, [])
    const {t} = useTranslation()
    console.log(statisticData)
    const tableItem = useMemo(()=>{
         return statisticData.length>0? statisticData?.map((el)=><StatisticTable key={el.uuidGame} {...el}/>):null
    },[statisticData])

    return (
        <StContainer>
            <StHeaderWrapper>
                <h1>{t('game_statistic')}</h1>
            <StatisticTable
                gameType={t('game_type')}
                guestLogin={t('opposer')}
                winnerLogin={t('winner')}
                creatorLogin={t('user_name')}
            />
            {tableItem}
            </StHeaderWrapper>
        </StContainer>
        
    );
};
export default Statistic;
