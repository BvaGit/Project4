import RoomItemGame from './RoomItemGame';
import { gameType } from '../../store/connectWS/actions';
import { gameTypeContainer } from '../../store/user/actions';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    gameTypeContainer: (payload: string) => dispatch(gameTypeContainer(payload))
})

export default connect(null, mapDispatchToProps)(RoomItemGame);