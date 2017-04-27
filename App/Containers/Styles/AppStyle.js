import { StyleSheet, Platform, NativeModules } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "rgba(255,255,255,1)"
  },
  header: {
    paddingTop: Platform.OS === "ios" ? 20 : NativeModules.statusBarHeight,
    height: Platform.OS === "ios" ? 64 : 54,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d45bb"
  },
  timeContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  timer: {
    fontSize: 70,
    fontFamily: "Helvetica",
    color: "rgba(0,0,0,0.6)"
  },
  actionContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(238,240,245,1)",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(111,111,111,0.4)"
  },
  lapsContainer: {
    flex: 3,
    backgroundColor: "rgba(238,240,245,1)"
  },
  laps: {
    borderBottomWidth: 1,
    borderColor: "rgba(111,111,111,0.4)",
    justifyContent: "space-around",
    flexDirection: "row",
    marginHorizontal: 20,
    paddingVertical: 10
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,1)"
  },
  startButton: {
    borderColor: "green"
  },
  stopButton: {
    borderColor: "red"
  },
  buttonText: {
    fontSize: 18
  },
  startButtonText: {
    color: "green"
  },
  stopButtonText: {
    color: "red"
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"
  },
  lapText: {
    fontSize: 16
  },
  lapTime: {
    color: "rgba(0,0,0,0.8)"
  },
  lapName: {
    color: "rgba(0,0,0,0.4)"
  }
});
