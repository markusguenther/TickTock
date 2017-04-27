// @flow

import React, { Component } from "react";
import { View, ScrollView, Text, TouchableHighlight } from "react-native";
import formatTime from "minutes-seconds-milliseconds";
import styles from "./Styles/AppStyle";

/**
 * Root component to wire up ios and android.
 * Write code just ones ;)
 */
class App extends Component {
  constructor() {
    super();
    this._handleStartPress = this._handleStartPress.bind(this);
    this._handleLapPress = this._handleLapPress.bind(this);
    this.state = {
      startTime: null,
      timeElapsed: 0,
      running: false,
      laps: []
    };
  }

  _renderStartStopButton() {
    let style = this.state.running ? styles.stopButton : styles.startButton;

    return (
      <TouchableHighlight
        style={[styles.button, style]}
        onPress={this._handleStartPress}
        underlayColor="lightgrey"
      >
        <Text
          style={[
            styles.buttonText,
            this.state.running ? styles.stopButtonText : styles.startButtonText
          ]}
        >
          {this.state.running ? "Stop" : "Start"}
        </Text>
      </TouchableHighlight>
    );
  }

  _renderLapButton() {
    let style = this.state.running ? styles.lapButton : styles.resetButton;

    return (
      <TouchableHighlight
        style={[styles.button, style]}
        onPress={this._handleLapPress}
        underlayColor="lightgrey"
      >
        <Text style={styles.buttonText}>
          {this.state.running ? "Runde" : "Reset"}
        </Text>
      </TouchableHighlight>
    );
  }

  _renderLaps() {
    return this.state.laps.map(function(time, index) {
      const lap = index + 1;

      return (
        <View style={styles.laps} key={"lap-" + lap}>
          <Text style={[styles.lapText, styles.lapName]}>
            Runde: {index + 1}
          </Text>
          <Text style={[styles.lapText, styles.lapTime]}>
            {formatTime(time)}
          </Text>
        </View>
      );
    });
  }

  _handleStartPress() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
      return;
    }

    this.setState({ startTime: new Date() });

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);
  }

  _handleLapPress() {
    if (!this.state.running) {
      this.setState({
        startTime: null,
        timeElapsed: 0,
        running: false,
        laps: []
      });
      return;
    }

    let lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            TickTock - Fynn Döring
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.actionContainer}>
          {this._renderStartStopButton()}
          {this._renderLapButton()}
        </View>
        <View style={styles.lapsContainer}>
          <ScrollView
            ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight) => {
              this.scrollView.scrollToEnd();
            }}
          >
            {this._renderLaps()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default App;
