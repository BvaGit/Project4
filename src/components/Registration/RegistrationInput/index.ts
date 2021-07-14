import RegistrationInput from './RegistrationInput';
import { connect } from 'react-redux';
import { getRegErrorByIdStore,getRegFieldByIdStore } from '../../../store/registration/selectors';
import { changeRegistrationField, changeRegistrationFieldError } from '../../../store/registration/actions';

const mapStateToProps = (state: any, props: any) => ({
    value: getRegFieldByIdStore(state, props),
    error: getRegErrorByIdStore(state, props)
})

const mapDispatchToProps = (dispatch: any) =>({
    changeField:(data: any) => dispatch(changeRegistrationField(data)),
    setError:(data: any) => dispatch(changeRegistrationFieldError(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationInput)