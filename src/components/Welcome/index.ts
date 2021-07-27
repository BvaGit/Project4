import Welcome from './Welcome';
import { connect } from 'react-redux';
import { getUserName } from '../../store/user/selectors';

const mapStateToProps = (state) => ({
    getUserName: getUserName(state)
})

export default connect(mapStateToProps, null)(Welcome);