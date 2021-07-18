import Main from './Main';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { isUserName } from '../../store/user/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    isUserName: () => dispatch(isUserName())
})

export default connect(null, mapDispatchToProps)(Main);