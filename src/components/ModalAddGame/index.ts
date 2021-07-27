import ModalAddGame from './ModalAddGame';
import { connect } from 'react-redux';
import { gameType, createGame } from '../../store/connectWS/actions';
import { typeGame } from '../../store/connectWS/selectors'
import { gameTypeContainer } from '../../store/user/actions';
import { Dispatch } from 'redux';

const mapStateToProps = (state) => ({
    typeGame: typeGame(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    gameType: (payload: string) => dispatch(gameType(payload)),
    createGame: () => dispatch(createGame()),
    gameTypeContainer: (payload: string) => dispatch(gameTypeContainer(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddGame);