// @flow

import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/AppStyle'

/**
 * Root component to wire up ios and android.
 * Write code just ones ;)
 */
class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text style={styles.timer}>00:00:00</Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={[styles.button, styles.startButton]}>
            <Text>Start</Text>
          </View>
          <View style={[styles.button, styles.stopButton]}>
            <Text>Stop</Text>
          </View>
        </View>
        <View style={styles.lapsContainer}>
          <Text>Laps</Text>
        </View>
      </View>
    )
  }
}

export default App
