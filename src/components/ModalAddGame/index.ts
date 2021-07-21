import ModalAddGame from './ModalAddGame';
import { connect } from 'react-redux';
import { gameType, createGame } from '../../store/connectWS/actions';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    gameType: (payload: string) => dispatch(gameType(payload)),
    createGame: () => dispatch(createGame())
})

export default connect(null, mapDispatchToProps)(ModalAddGame);