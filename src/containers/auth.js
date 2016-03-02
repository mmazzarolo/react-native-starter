/**
 * @providesModule AuthScreen
 */
import React, { Dimensions, Image, PropTypes, StyleSheet, } from 'react-native'
import { View } from 'react-native-animatable'
import Button from 'Button'
import SocialButton from 'SocialButton'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as authActions from 'ReactNativeApp/src/redux/modules/auth'

const { width } = Dimensions.get('window')

const mapStateToProps = state => ({
  error: state.auth.error,
  isLoading: state.auth.isLoading,
  isInitialized: state.auth.isInitialized,
  loggedUser: state.global.loggedUser
})

@connect(mapStateToProps, authActions)
export default class AuthScreen extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    isInitialized: PropTypes.bool.isRequired,
    loggedUser: PropTypes.object,
    checkSessionToken: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.checkSessionToken()
  }

  componentDidUpdate() {
    const { isInitialized, loggedUser } = this.props
    if (isInitialized && loggedUser) Actions.homeScreen()
  }

  _handleLoginPress = () => Actions.login()

  _handleSignupPress = () => Actions.signup()

  render() {
    const { isInitialized } = this.props
    const imageSource = require('ReactNativeApp/src/assets/images/logo.png')
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={imageSource} resizeMode={Image.resizeMode.contain} />
        </View>
        { isInitialized &&
          <View animation='fadeIn' >
            <SocialButton type='facebook' style={styles.socialButton} />
            <SocialButton type='google' style={styles.socialButton} />
            <View style={{ flexDirection: 'row' }}>
              <Button onPress={this._handleLoginPress} style={styles.button}>Log In</Button>
              <Button onPress={this._handleSignupPress} style={styles.button}>Sign Up</Button>
            </View>
          </View>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: width * 0.80,
  },
  button: {
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 10,
    elevation: 2,
  },
  socialButton: {
    marginHorizontal: 30,
    marginBottom: 10,
  },
})
