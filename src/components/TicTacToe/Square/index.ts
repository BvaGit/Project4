import Square from './Square';
import { setStep, doTicStep } from '../../../store/connectWS/actions';
import { connect } from 'react-redux';
import { getStepG, getField } from '../../../store/connectWS/selectors';

const maoStateToProps = (state) => ({
    getStepG: getStepG(state),
    getField: getField(state)
})

const mapDispatchToProps = (dispatch) => ({
    setStep: (payload) => dispatch(setStep(payload)),
    doTicStep: () => dispatch(doTicStep())
})

export default connect(maoStateToProps, mapDispatchToProps)(Square);