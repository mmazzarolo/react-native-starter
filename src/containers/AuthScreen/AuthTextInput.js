import React, { Component, PropTypes } from 'react'
import { Platform, StyleSheet, TextInput } from 'react-native'
import { Text, View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import i18n from '../../i18n'
import * as colors from '../../config/colors'

const IS_ANDROID = Platform.OS === 'android'

export default class LoginForm extends Component {
  static propTypes = {
    showForgotLink: PropTypes.bool,
    onForgotPress: PropTypes.func,
    iconName: PropTypes.string,
    errorText: PropTypes.string
  }

  focus = () => this.refs.textInput.focus()

  render () {
    const { showForgotLink, onForgotPress, iconName, errorText } = this.props
    const forgotLink = (
      <Text style={styles.forgotLink} onPress={onForgotPress}>
        {i18n.t('AUTH_FORGOT_BUTTON')}
      </Text>
    )
    return (
      <View style={styles.container}>
        <View style={styles.textInputWrapper}>
          <Icon
            style={styles.icon}
            name={iconName}
            size={22}
            color={colors.ALMOST_BLACK}
            onPress={this.focus}
          />
          <TextInput
            ref={'textInput'}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.textInput}
            maxLength={32}
            underlineColorAndroid={'transparent'}
            {...this.props}
          />
          {showForgotLink ? forgotLink : null}
        </View>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  textInputWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 42,
    borderRadius: 4,
    marginTop: 10,
    borderColor: colors.FORM_TEXTINPUT_BORDER,
    backgroundColor: colors.FORM_TEXTINPUT_BACKGROUND,
    borderWidth: 1,
    paddingHorizontal: 16
  },
  icon: {
    paddingRight: 8
  },
  forgotLink: {
    fontWeight: 'normal',
    color: colors.FORM_TEXTINPUT_TEXT
  },
  textInput: {
    flex: 1,
    color: colors.FORM_TEXTINPUT_TEXT,
    margin: IS_ANDROID ? -1 : 0,
    height: 42,
    padding: 7
  },
  errorText: {
    color: colors.FORM_TEXTINPUT_ERROR,
    height: 18,
    marginLeft: 16
  }
})
