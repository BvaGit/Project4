import RoomItemGame from './RoomItemGame';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setIdGame, connectBot, creatorGame } from '../../store/connectWS/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setIdGame: (payload: string) => dispatch(setIdGame(payload)),
    connectBot: () => dispatch(connectBot()),
    creatorGame: (payload: string) => dispatch(creatorGame(payload))
})

export default connect(null, mapDispatchToProps)(RoomItemGame);