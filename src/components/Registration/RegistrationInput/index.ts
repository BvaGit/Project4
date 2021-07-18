import RegistrationInput from './RegistrationInput';
import { connect } from 'react-redux';
import { getRegErrorByIdStore,getRegFieldByIdStore } from '../../../store/registration/selectors';
import { changeRegistrationField, changeRegistrationFieldError } from '../../../store/registration/actions';
import * as Types from '../../../store/types';
import { Dispatch } from 'redux';

const mapStateToProps = (state: Types.TRegistrAuth, props: any) => ({
    value: getRegFieldByIdStore(state, props),
    error: getRegErrorByIdStore(state, props)
})

const mapDispatchToProps = (dispatch: Dispatch) =>({
    changeField:(data: Types.TPayload) => dispatch(changeRegistrationField(data)),
    setError:(data: Types.TPayload) => dispatch(changeRegistrationFieldError(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationInput)