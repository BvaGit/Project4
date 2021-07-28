import Winner from './Winner';
import { connect } from 'react-redux';
import { getWinner } from '../../store/connectWS/selectors';

const mapStateToProps = (state) => ({
    getWinner: getWinner(state)
})

export default connect(mapStateToProps, null)(Winner);