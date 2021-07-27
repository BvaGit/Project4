import GameContainer from './GameContainer';
import { connect } from 'react-redux';
import { getGameTypeContainer } from '../../store/user/selectors';
import { getStepOrder } from '../../store/connectWS/selectors';

const mapStateToProps = (state: any) => ({
    getGameTypeContainer: getGameTypeContainer(state),
    getStepOrder: getStepOrder(state)
})

export default connect(mapStateToProps, null)(GameContainer);