import TicTacToe from './TicTacToe';
import { connect } from 'react-redux';
import { getField } from '../../store/connectWS/selectors';

const mapStateToProps = (state) => ({
    getField: getField(state)
})

export default connect(mapStateToProps, null)(TicTacToe);