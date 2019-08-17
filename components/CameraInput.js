import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions
} from "react-native";
import ImagePicker from "react-native-image-picker";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const options = {
  title: "Select Picture",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class CameraInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: "https://via.placeholder.com/150"
    };
  }

  handlePress = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // const source = { uri: response.uri };

        // You can also display the image using data:
        const source = { uri: "data:image/jpeg;base64," + response.data };
        console.log(source.uri);
        this.setState({
          selectedImage: source.uri
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageItem}
            source={{ uri: this.state.selectedImage }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.handlePress}
            title="Add Image"
            color="#00adb5"
          />
        </View>
      </View>
    );
  }
}

export default CameraInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  imageContainer: {
    marginLeft: screenWidth / 10
  },
  imageItem: {
    width: 100,
    height: 100
  },
  buttonContainer: {
    marginTop: screenHeight / 40,
    width: screenWidth / 3
  }
});
