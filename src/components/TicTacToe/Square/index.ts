import Square from './Square';
import { setStep, doTicStep, gameBot } from '../../../store/connectWS/actions';
import { connect } from 'react-redux';
import { getStepG, getField, bot } from '../../../store/connectWS/selectors';
import { Dispatch } from 'redux';

const mapStateToProps = (state) => ({
    getStepG: getStepG(state),
    getField: getField(state),
    bot: bot(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setStep: (payload) => dispatch(setStep(payload)),
    doTicStep: () => dispatch(doTicStep()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Square);