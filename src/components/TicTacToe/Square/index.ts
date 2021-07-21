import Square from './Square';
import { connect } from 'react-redux';
import { setStep, setTime } from '../../../store/connectWS/actions';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setStep: (payload: string) => dispatch(setStep(payload)),
    setTime: (payload: string) => dispatch(setTime(payload))
})

export default connect(null, mapDispatchToProps)(Square);