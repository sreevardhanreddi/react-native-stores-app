import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CustomTopBar from "./../components/CustomTopBar";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

class AddStoreScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <CustomTopBar title={"Add Store"} />
      </View>
    );
  }
}

export default AddStoreScreen;

const styles = StyleSheet.create({
  container: {},
  topHeader: {
    backgroundColor: "#00adb5",
    height: screenHeight / 15,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  iconStyles: {
    marginLeft: screenWidth / 20,
    marginRight: screenWidth / 10
  },
  textStyles: {
    color: "white",
    fontSize: screenHeight / 40
  }
});
