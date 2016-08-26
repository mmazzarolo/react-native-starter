import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-animatable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators as authActionCreators } from '../../reducers/authReducer'
import * as parseService from '../../services/parseService'
import { PARSE_APP_ID, PARSE_SERVER_URL } from '../../config/keys'

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(authActionCreators, dispatch)
})

export class SplashScreen extends Component {
  static propTypes = {
    autoLogin: PropTypes.func.isRequired
  }

  componentDidMount () {
    const { autoLogin } = this.props
    parseService.initialize(PARSE_APP_ID, PARSE_SERVER_URL)
    autoLogin()
  }

  render () {
    return (
      <View style={styles.container} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
