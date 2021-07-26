import GameContainer from './GameContainer';
import { connect } from 'react-redux';
import { getGameTypeContainer } from '../../store/user/selectors';

const mapStateToProps = (state: any) => ({
    getGameTypeContainer: getGameTypeContainer(state)
})

export default connect(mapStateToProps, null)(GameContainer);