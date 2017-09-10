import React, { Component } from 'react';
import { Platform, AppRegistry, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator} from 'react-navigation';
import { Constants, Location, Permissions } from 'expo';
 // 1.0.0-beta.11
import * as firebase from 'firebase';
 // 4.3.1


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYvr_RQWQaTRxR9ImblpKBjGWHMUuUUgg",
  authDomain: "unisupport-a0808.firebaseapp.com",
  databaseURL: "https://unisupport-a0808.firebaseio.com",
  storageBucket: "unisupport-a0808.appspot.com"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

var int = 0;

class HomeScreen extends React.Component {
  static navigationOptions = {
<<<<<<< HEAD
    title: 'UniSupport',
=======
    title: 'Welcome',
  }
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }


  _getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied',
    });
  }

  let location = await Location.getCurrentPositionAsync({});
this.setState({ location });
};

<<<<<<< HEAD
        if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
        }
    }
>>>>>>> refs/remotes/origin/master
  };
=======
>>>>>>> refs/remotes/origin/master
  render() {
    const { navigate } = this.props.navigation;

    let gps = 'Waiting..';
        if (this.state.errorMessage) {
          gps = this.state.errorMessage;
        } else if (this.state.location) {
          gps = JSON.stringify(this.state.location);
          console.log(gps);
        }

    return (
          <View>
            <Text style={styles.paragraph}>{gps}</Text>
            <Button
              onPress={() => navigate('Offer')}
              title="Offer"
            />
            <Button
              onPress={() => navigate('Request')}
              title="Request"
            />
            <Button
              onPress={() => navigate('Info')}
              title="Info"
            />

          </View>
        );
  }
};
//
// class OfferScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Offer',
//   };
//
//   storeRequest = type => {
//     firebase.database().ref('request' + int).set({
//       request: type
//     });
//     int = int + 1;
//   };
//
//   render() {
//     return (
//       <View>
//         <Button
//           title="Shelter"
//           onPress={() => this.storeRequest('shelter')}
//         />
//           <Button
//           title="Assistance"
//           onPress={() => this.storeRequest('assistance')}
//         />
//           <Button
//           title="Supplies"
//           onPress={() => this.storeRequest('supplies')}
//         />
//           <Button
//           title="Ride"
//           onPress={this.storeRequest}
//         />
//       </View>
//     );
//   }
// }

class OfferScreen extends React.Component {
  static navigationOptions = {
    title: 'Offer',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
          <View>
            <Button
              onPress={() => navigate('OfferShelter')}
              title="Offer Shelter"
            />
            <Button
              onPress={() => navigate('OfferAssistance')}
              title="Offer Assistance"
            />
            <Button
              onPress={() => navigate('OfferRides')}
              title="Offer Rides"
            />
            <Button
              onPress={() => navigate('OfferSupplies')}
              title="Offer Supplies"
            />
          </View>
        );
  }
}

class RequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Request',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
          <View>
            <Button
              onPress={() => navigate('RequestShelter')}
              title="Request Shelter"
            />
            <Button
              onPress={() => navigate('RequestAssistance')}
              title="Request Assistance"
            />
            <Button
              onPress={() => navigate('RequestRides')}
              title="Request Rides"
            />
            <Button
              onPress={() => navigate('RequestSupplies')}
              title="Request Supplies"
            />
          </View>
        );
  }
}


class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };
  render() {
    return (
      <View>
        <Button
<<<<<<< HEAD
          title="Map"
          onPress={this.storeRequest}
        />
          <Button
          title="Updates"
          onPress={this.storeRequest}
        />
          <Button
          title="Last Minutes"
          onPress={this.storeRequest}
       />
=======
              onPress={this.storeRequest}
              title="Submit"
            />
>>>>>>> refs/remotes/origin/master
      </View>
    );
  }
}

class ShelterOfferScreen extends React.Component {
  static navigationOptions = {
    title: 'Offer Shelter',
  };
  constructor(props) {
    super(props);

    this.state = {
      type: 'crazy',
      address: '1043208 Danforth Dr ',
      timeRequested:'0129410248',
      additionalDetails: 'dsfljsad;fladks',
      active: true,
      numberOfPeopleAffected: 0,
      // gpsLatitude: this.state.location.coords.latitude,
      // gpsLongitude: this.state.location.coords.longitude,
     }
  }

  _handlePress() {
    console.log(this.state.type);
    console.log(this.state.timeRequested);
  }

    storeRequest = request => {
      //                        name of the branch
      firebase.database().ref('request' + int).set(
        request
      );
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
    const {goBack} = this.props.navigation;
    return (
          <View>
            <TextInput
              title="Type"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(type) => this.setState({type})}
              value={this.state.type}
            />
            <TextInput
              title="Address"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(address) => this.setState({address})}
              value={this.state.address}
            />
            <TextInput
              title="Additional Details"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(additionalDetails) => this.setState({additionalDetails})}
              value={this.state.additionalDetails}
            />
            <TextInput
              title="Additional Details"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(numberOfPeopleAffected) => this.setState({numberOfPeopleAffected})}
              value={this.state.numberOfPeopleAffected}
            />

            <Button
              onPress={() => this.storeRequest(this.state)}
              title="Submit"
            />
          </View>
        );
  }
}

class ShelterRequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Request Shelter',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

    storeRequest = type => {
      firebase.database().ref('request').set({
        request: type
      });
      // int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
    const {goBack} = this.props.navigation;
    return (
          <View>
            <TextInput
              title="Type"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <TextInput
              title="Address"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <Button
              onPress={() => this.storeRequest(''), () => goBack()}
              title="Submit"
            />
          </View>
        );
  }
}
//
// class AssistanceOfferScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Offer Assistance',
//   };
//   constructor(props) {
//     super(props);
//     this.state = { text: 'Placeholder' };
//   }
//
//     storeRequest = type => {
//       firebase.database().ref('offer' + int).set({
//         request: type
//       });
//       int = int + 1;
//     };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     const {goBack} = this.props.navigation;
//     return (
//           <View>
//             <TextInput
//               title="Type"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               title="Address"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <Button
//               onPress={() => this.storeOffer('assistance'), () => goBack()}
//               title=""
//             />
//           </View>
//         );
//   }
// }
//
// class AssistanceRequestScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Request Assistance',
//   };
//   constructor(props) {
//     super(props);
//     this.state = { text: 'Placeholder' };
//   }
//
//     storeRequest = type => {
//       firebase.database().ref('request' + int).set({
//         request: type
//       });
//       int = int + 1;
//     };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     const {goBack} = this.props.navigation;
//     return (
//           <View>
//             <TextInput
//               title="Type"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               title="Address"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <Button
//               onPress={() => this.storeRequest('assistance'), () => goBack()}
//               title=""
//             />
//           </View>
//         );
//   }
// }
//
// class RidesOfferScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Offer Rides',
//   };
//   constructor(props) {
//     super(props);
//     this.state = { text: 'Placeholder' };
//   }
//
//     storeRequest = type => {
//       firebase.database().ref('offer' + int).set({
//         request: type
//       });
//       int = int + 1;
//     };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     const {goBack} = this.props.navigation;
//     return (
//           <View>
//             <TextInput
//               title="Type"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               title="Address"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <Button
//               onPress={() => this.storeOffer('ride'), () => goBack()}
//               title=""
//             />
//           </View>
//         );
//   }
// }
//
// class RidesRequestScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Request Rides',
//   };
//   constructor(props) {
//     super(props);
//     this.state = { text: 'Placeholder' };
//   }
//
//     storeRequest = type => {
//       firebase.database().ref('request' + int).set({
//         request: type
//       });
//       int = int + 1;
//     };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//           <View>
//             <TextInput
//               title="Type"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               title="Address"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <Button
//               onPress={() => this.storeRequest('ride'), () => goBack()}
//               title=""
//             />
//           </View>
//         );
//   }
// }
//
// class SuppliesOfferScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Offer Supplies',
//   };
//   constructor(props) {
//     super(props);
//     this.state = { text: 'Placeholder' };
//   }
//
//     storeRequest = type => {
//       firebase.database().ref('offer' + int).set({
//         request: type
//       });
//       int = int + 1;
//     };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     const {goBack} = this.props.navigation;
//     return (
//           <View>
//             <TextInput
//               title="Type"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               title="Address"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <Button
//               onPress={() => this.storeOffer('supplies'), () => goBack()}
//               title=""
//             />
//           </View>
//         );
//   }
// }
//
// class SuppliesRequestScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Request Supplies',
//   };
//   constructor(props) {
//     super(props);
//     this.state = { text: 'Placeholder' };
//   }
//
//     storeRequest = type => {
//       firebase.database().ref('request' + int).set({
//         request: type
//       });
//       int = int + 1;
//     };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//           <View>
//             <TextInput
//               title="Type"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               title="Address"
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <TextInput
//               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <Button
//               onPress={() => this.storeRequest('supplies'), () => goBack()}
//               title=""
//             />
//           </View>
//         );
//   }
// }

export default StackNavigator({
  Home: { screen: HomeScreen },
  Offer: { screen: OfferScreen },
  Request: { screen: RequestScreen },
  Info: { screen: InfoScreen },
  RequestShelter: { screen: ShelterRequestScreen },
  // RequestAssistance: { screen: AssistanceRequestScreen },
  // RequestSupplies: { screen: SuppliesRequestScreen },
  // RequestRides: { screen: RidesRequestScreen },
  OfferShelter: { screen: ShelterOfferScreen },
  // OfferAssistance: { screen: AssistanceOfferScreen },
  // OfferSupplies: { screen: SuppliesOfferScreen },
  // OfferRides: { screen: RidesOfferScreen }

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
