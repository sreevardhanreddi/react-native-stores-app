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
import TitleInput from "./../components/TitleInput";
import DetailInput from "./../components/DetailInput";
import CameraInput from "./../components/CameraInput";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

class AddStoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      detail: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomTopBar
          title={"Add Store asdfasdfasdfasdfasdfasdfasdfasdfasdfasfasdfaa"}
        />

        <ScrollView>
          <View>
            <View style={styles.titleContainer}>
              <TitleInput />
            </View>
            <View style={styles.detailContainer}>
              <DetailInput />
            </View>
            <View style={styles.cameraContainer}>
              <CameraInput />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddStoreScreen;

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    marginTop: screenHeight / 30,
    height: screenHeight / 10,
    padding: screenWidth / 20
  },
  detailContainer: {
    marginTop: screenHeight / 30,
    height: screenHeight / 10,
    padding: screenWidth / 20
  },
  cameraContainer: {
    marginTop: screenHeight / 30,
    padding: screenWidth / 20
  }
});
