// @flow
// Container for Login Component
import Login from './Login'
import {connect} from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import {getNav, getLogin} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getLogin(state),
})

export default connect(mapStateToProps, actions)(Login)