import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators as authActionCreators } from '../../reducers/authReducer'
import Button from '../../components/Button'

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(authActionCreators, dispatch),
  dispatch
})

export class MainScreen extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  static defaultProps = {
    user: {}
  }

  render () {
    const welcomeText = this.props.user
      ? <Text style={styles.welcomeText}>{`Welcome ${this.props.user.username}!`}</Text>
      : null

    return (
      <View style={styles.container}>
        {welcomeText}
        <Button onPress={this.props.logout} style={styles.button}>
          <Text style={styles.buttonText}>{'Logout'}</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    textAlign: 'center'
  },
  button: {
    margin: 60
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
