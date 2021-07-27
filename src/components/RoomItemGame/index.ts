import RoomItemGame from './RoomItemGame';

import { connect } from 'react-redux';
import { setIdGAme, subscribeRoom, joinRoom, setGameTypeRoom, getStepOrder, joinRoomBot, gameBot, subscribeRoomBot } from '../../store/connectWS/actions';
import { gameTypeContainer } from '../../store/user/actions';
import { gameType } from '../../store/connectWS/actions';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setIdGAme: (payload) => dispatch(setIdGAme(payload)),
    subscribeRoom: () => dispatch(subscribeRoom()),
    joinRoom: () => dispatch(joinRoom()),
    setGameTypeRoom: (payload) => dispatch(setGameTypeRoom(payload)),
    getStepOrder: () => dispatch(getStepOrder()),
    gameTypeContainer: (payload: string) => dispatch(gameTypeContainer(payload)),
    joinRoomBot: () => dispatch(joinRoomBot()),
    gameBot: () => dispatch(gameBot()),
    subscribeRoomBot: () => dispatch(subscribeRoomBot()),
})

export default connect(null, mapDispatchToProps)(RoomItemGame);