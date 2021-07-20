import Statistic from './Statistic';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { isStatistic } from '../../store/statistic/actions';

const mapDispatchToProps  = (dispatch: Dispatch) => ({
    isStatistic: () => dispatch(isStatistic())
})
 
export default connect(null, mapDispatchToProps)(Statistic);