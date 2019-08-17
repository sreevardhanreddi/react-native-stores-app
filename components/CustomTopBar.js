import React, { Component } from "react";
import { View, Text, Dimensions, StatusBar, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

class CustomTopBar extends Component {
  constructor(props) {
    super(props);
  }

  toggleSideDrawer = () => {
    this.props.navigation.toggleDrawer();
    console.log("tapped");
  };

  render() {
    const maxLimit = 12;
    const title =
      this.props.title.length > maxLimit
        ? this.props.title.substring(0, maxLimit - 3) + " ..."
        : this.props.title;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="teal" barStyle="light-content" />
        <View style={styles.topHeader}>
          <View style={styles.iconStyles}>
            <Icon
              name="md-menu"
              size={30}
              color="white"
              onPress={this.toggleSideDrawer}
            />
          </View>
          <View>
            <Text style={styles.textStyles}>{title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(CustomTopBar);

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
