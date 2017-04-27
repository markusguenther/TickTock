import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey'
  },
  timeContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 60
  },
  actionContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: 'green'
  },
  stopButton: {
    borderColor: 'red'
  },
  lapsContainer: {
    flex: 4,
    backgroundColor: 'blue'
  }
})