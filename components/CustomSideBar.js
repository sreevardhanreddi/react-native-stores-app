import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { DrawerItems } from "react-navigation";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const CustomSideBar = props => (
  // console.log(props)
  <ScrollView>
    <View>
      <View style={styles.header}>
        <Text>custom side bar</Text>
      </View>
      <View>
        <DrawerItems {...props} />
      </View>
    </View>
  </ScrollView>
  //  <ScrollView>
  //     <SafeAreaView
  //       style={styles.container}
  //       forceInset={{ top: "always", horizontal: "never" }}
  //     >
  //       <DrawerItems {...props} />
  //     </SafeAreaView>
  //   </ScrollView>
);

export default CustomSideBar;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: screenHeight / 3,
    backgroundColor: "teal"
  },
  propsContent: {
    fontSize: screenHeight / 30
  },
  container: {
    flex: 1
  }
});
