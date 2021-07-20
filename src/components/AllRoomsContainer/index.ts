import AllRoomsContainer from './AllRoomsContainer';
import { connect } from 'react-redux';
import { getUserName } from '../../store/user/selectors';
import { getRooms } from '../../store/connectWS/selectors';

const mapStateToProps = (state) => ({
    userName: getUserName(state),
    rooms: getRooms(state)
})

export default connect(mapStateToProps, null)(AllRoomsContainer);