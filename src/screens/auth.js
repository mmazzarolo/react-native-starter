/**
 * @providesModule AuthScreen
 */
import React, { PropTypes, StyleSheet, Text, View, } from 'react-native'

import { connect } from 'react-redux'
import * as authActions from '../redux/modules/auth'

const mapStateToProps = (state) => {
  return {
    test: state.test,
  }
}

class Profile extends React.Component {
  static propTypes = {
    test: PropTypes.string,
  }

  componentDidMount() {
    console.log(this.props)
    this.props.checkSessionToken()
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.test}
        </Text>
      </View>
    )
  }
}

export default connect(mapStateToProps, authActions)(Profile)
