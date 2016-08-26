import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { noop } from 'lodash'
import * as colors from '../../config/colors'
import * as metrics from '../../config/metrics'
import Icon from 'react-native-vector-icons/Ionicons'

export default class NavBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    onLeftPress: PropTypes.func,
    onRightPress: PropTypes.func,
    leftIcon: React.PropTypes.string,
    rightImage: React.PropTypes.string
  }

  static defaultProps = {
    title: 'Hello world',
    onLeftPress: noop,
    onRightPress: noop,
    leftIcon: 'md-arrow-back'
  }

  render () {
    const { title, onLeftPress, onRightPress, leftIcon, rightImage } = this.props
    const actions = rightImage ? [{ title: '', icon: rightImage, show: 'always' }] : undefined
    return (
      <Icon.ToolbarAndroid
        navIconName={leftIcon}
        onIconClicked={onLeftPress}
        titleColor={'white'}
        title={title}
        actions={actions}
        onActionSelected={onRightPress}
        style={styles.toolbar}
      />
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: colors.PRIMARY,
    height: metrics.NAVBAR_HEIGHT,
    position: 'absolute', top: 0, left: 0, width: metrics.DEVICE_WIDTH // TO-DO
  }
})
