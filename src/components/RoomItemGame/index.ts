import RoomItemGame from './RoomItemGame';

import { connect } from 'react-redux';
import { setIdGAme, subscribeRoom, joinRoom, setGameTypeRoom, getStepOrder, joinRoomBot } from '../../store/connectWS/actions';
import { gameTypeContainer } from '../../store/user/actions';
import { gameType } from '../../store/connectWS/actions';

const mapDispatchToProps = (dispatch) => ({
    setIdGAme: (payload) => dispatch(setIdGAme(payload)),
    subscribeRoom: () => dispatch(subscribeRoom()),
    joinRoom: () => dispatch(joinRoom()),
    setGameTypeRoom: (payload) => dispatch(setGameTypeRoom(payload)),
    getStepOrder: () => dispatch(getStepOrder()),
    gameTypeContainer: (payload: string) => dispatch(gameTypeContainer(payload)),
    joinRoomBot: () => dispatch(joinRoomBot())
})

export default connect(null, mapDispatchToProps)(RoomItemGame);