/**
 * @providesModule AuthScreen
 */
import React, { Dimensions, Image, StyleSheet, View, } from 'react-native'
import Button from 'Button'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as authActions from '../redux/modules/auth'

const { width } = Dimensions.get('window')

const mapStateToProps = state => {
  return {}
}

class AuthScreen extends React.Component {

  _handleLoginPress = () => {
    Actions.login()
  }

  _handleRegisterPress = () => {
    Actions.register()
  }

  render() {
    const imageSource = require('ReactNativeApp/src/assets/images/logo.png')
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={imageSource} resizeMode={Image.resizeMode.contain} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button text='LOGIN' onPress={this._handleLoginPress} buttonStyle={styles.button} />
          <Button text='REGISTER' onPress={this._handleRegisterPress} buttonStyle={styles.button} />
        </View>
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
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.72,
  },
  button: {
    flex: 1,
    margin: 20,
  },
})

export default connect(mapStateToProps, authActions)(AuthScreen)
