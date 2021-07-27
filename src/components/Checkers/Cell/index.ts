import Cell from './Cell';
import { connect } from 'react-redux';
import { doCheckersStep } from '../../../store/connectWS/actions';
import { Dispatch } from 'redux'

const mapDispatchToProps = (dispatch: Dispatch) => ({
    doCheckersStep: (payload: string) => dispatch(doCheckersStep(payload))
})

export default connect(null, mapDispatchToProps)(Cell);
