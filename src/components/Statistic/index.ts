import Statistic from './Statistic';
import { connect } from 'react-redux';
import { isStatistic } from '../../store/statistic/actions';

const mapStateToProps = (state:any) => ({
    statisticData: state.statistic.statistic,
});
const mapDispatchToProps = {
    isStatistic,
};
export default connect(mapStateToProps,mapDispatchToProps)(Statistic);
