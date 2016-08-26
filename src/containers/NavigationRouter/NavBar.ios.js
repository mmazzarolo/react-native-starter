import React, { Component, PropTypes } from 'react'
import { Image, NavigationExperimental, StyleSheet } from 'react-native'
import { noop } from 'lodash'
import * as colors from '../../config/colors'
import Icon from 'react-native-vector-icons/Ionicons'
import TouchableView from '../../components/TouchableView'

const { Header } = NavigationExperimental

export default class NavigationHeader extends Component {
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
    leftIcon: 'ios-arrow-back'
  }

  _renderTitleComponent = () => {
    const { title } = this.props
    return (
      <Header.Title textStyle={styles.titleText}>
        {title}
      </Header.Title>
    )
  }

  _renderLeftComponent = () => {
    const { onLeftPress, leftIcon } = this.props
    return (
      <TouchableView onPress={onLeftPress} style={styles.leftButton}>
        <Icon name={leftIcon} size={18} color={'white'} />
      </TouchableView>
    )
  }

  _renderRightComponent = () => {
    const { onRightPress, rightImage } = this.props
    return (
      <TouchableView onPress={onRightPress} style={styles.leftButton}>
        <Image source={rightImage} resizeMode={'contain'} style={styles.rightImage} />
      </TouchableView>
    )
  }


  render () {
    const { rightImage } = this.props
    return (
      <Header
        {...this.props}
        style={styles.container}
        renderTitleComponent={this._renderTitleComponent}
        renderLeftComponent={this._renderLeftComponent}
        renderRightComponent={rightImage ? this._renderRightComponent : () => null}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY
  },
  titleText: {
    color: 'white'
  },
  leftButton: {
    padding: 14
  },
  rightImage: {
    width: 22,
    height: 22
  }
})
