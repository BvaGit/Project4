import AuthBtn from './AuthBtn';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { sendAuth } from '../../../store/auth/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    auth: () => dispatch(sendAuth())
})

export default connect(null, mapDispatchToProps)(AuthBtn);