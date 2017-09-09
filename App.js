import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator} from 'react-navigation';
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
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
          <View>
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
}
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
              onPress={this.storeRequest}
              title="Submit"
            />
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
    this.state = { text: 'Placeholder' };
  }

    storeRequest = type => {
      firebase.database().ref('offer' + int).set({
        request: type
      });
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => this.storeOffer('shelter'), () => navigate('Home')}
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
      firebase.database().ref('request' + int).set({
        request: type
      });
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => this.storeRequest('shelter'), () => navigate('Home')}
              title="Submit"
            />
          </View>
        );
  }
}

class AssistanceOfferScreen extends React.Component {
  static navigationOptions = {
    title: 'Offer Assistance',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

    storeRequest = type => {
      firebase.database().ref('offer' + int).set({
        request: type
      });
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => this.storeOffer('assistance'), () => navigate('Home')}
              title="Submit"
            />
          </View>
        );
  }
}

class AssistanceRequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Request Assistance',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

    storeRequest = type => {
      firebase.database().ref('request' + int).set({
        request: type
      });
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => this.storeRequest('assistance'), () => navigate('Home')}
              title="Submit"
            />
          </View>
        );
  }
}

class RidesOfferScreen extends React.Component {
  static navigationOptions = {
    title: 'Offer Rides',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

    storeRequest = type => {
      firebase.database().ref('offer' + int).set({
        request: type
      });
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => this.storeOffer('ride'), () => navigate('Home')}
              title="Submit"
            />
          </View>
        );
  }
}

class RidesRequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Request Rides',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

    storeRequest = type => {
      firebase.database().ref('request' + int).set({
        request: type
      });
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => this.storeRequest('ride'), () => navigate('Home')}
              title="Submit"
            />
          </View>
        );
  }
}

class SuppliesOfferScreen extends React.Component {
  static navigationOptions = {
    title: 'Offer Supplies',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

    storeRequest = type => {
      firebase.database().ref('offer' + int).set({
        request: type
      });
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => this.storeOffer('supplies'), () => navigate('Home')}
              title="Submit"
            />
          </View>
        );
  }
}

class SuppliesRequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Request Supplies',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

    storeRequest = type => {
      firebase.database().ref('request' + int).set({
        request: type
      });
      int = int + 1;
    };

  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => this.storeRequest('supplies'), () => navigate('Home')}
              title="Submit"
            />
          </View>
        );
  }
}

export default StackNavigator({
  Home: { screen: HomeScreen },
  Offer: { screen: OfferScreen },
  Request: { screen: RequestScreen },
  Info: { screen: InfoScreen },
  RequestShelter: { screen: ShelterRequestScreen },
  RequestAssistance: { screen: AssistanceRequestScreen },
  RequestSupplies: { screen: SuppliesRequestScreen },
  RequestRides: { screen: RidesRequestScreen },
  OfferShelter: { screen: ShelterOfferScreen },
  OfferAssistance: { screen: AssistanceOfferScreen },
  OfferSupplies: { screen: SuppliesOfferScreen },
  OfferRides: { screen: RidesOfferScreen }

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
