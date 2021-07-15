import RegistrationButton from './RegistrationButton'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { sendRegistration } from '../../../store/registration/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    register: () => dispatch(sendRegistration())
})

export default connect(null, mapDispatchToProps)(RegistrationButton);