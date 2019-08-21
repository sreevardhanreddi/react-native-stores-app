import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const aspectRatio = screenWidth / screenHeight;
const latitudeDelta = 0.015;
const longitudeDelta = aspectRatio * latitudeDelta;

class MapInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedLocation: {
        latitude: 36.14319077106534,
        longitude: -86.76708101838142,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta
      }
    };
  }

  pickLocationHandler = coordinates => {
    console.log(coordinates);
    this.setState({
      focusedLocation: {
        ...this.state.focusedLocation,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
      }
    });
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    });
  };

  getCurrentUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          focusedLocation: {
            ...this.state.focusedLocation,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
        this.map.animateToRegion({
          ...this.state.focusedLocation,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      err => console.log(err),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 10000 }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          // region={this.state.focusedLocation}
          style={styles.mapContainer}
          onPress={event =>
            this.pickLocationHandler(event.nativeEvent.coordinate)
          }
          showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled={true}
          ref={ref => (this.map = ref)}
        >
          <MapView.Marker
            // onPress={e => console.log(e.nativeEvent)}
            coordinate={this.state.focusedLocation}
          />
        </MapView>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonContainer}
            onPress={this.getCurrentUserLocation}
            title="Locate Me"
            color="#00adb5"
          />
        </View>
      </View>
    );
  }
}

export default MapInput;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center"
  },
  mapContainer: {
    height: "80%",
    width: "100%"
  },
  buttonContainer: {
    width: screenWidth / 3,
    marginTop: "5%",
    marginLeft: "35%"
  }
});
