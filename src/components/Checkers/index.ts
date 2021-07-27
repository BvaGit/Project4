import Checkers from './Checkers';
import { connect } from 'react-redux'
import { getField } from '../../store/connectWS/selectors'

const mapStateToProps = (state) => ({ field: getField(state) }) 

export default connect(mapStateToProps)(Checkers)