import Main from './Main';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { isUserName } from '../../store/user/actions';
import { connectWS } from '../../store/connectWS/actions'

const mapDispatchToProps = (dispatch: Dispatch) => ({
    isUserName: () => dispatch(isUserName()),
    connectWS: () => dispatch(connectWS())
})

export default connect(null, mapDispatchToProps)(Main);