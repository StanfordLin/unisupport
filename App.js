import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import * as firebase from 'firebase'; // 4.3.1

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseConfig = {
  apiKey: 'AIzaSyAYvr_RQWQaTRxR9ImblpKBjGWHMUuUUgg',
  authDomain: 'unisupport-a0808.firebaseapp.com',
  databaseURL: 'https://unisupport-a0808.firebaseio.com',
  storageBucket: 'unisupport-a0808.appspot.com',
};

var int = 0;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: ' App Name ',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          welcome
        </Text>
        <TouchableOpacity
            style={styles.button} 
            onPress={this._onPick}>
            <Text>   offer   </Text>
          </TouchableOpacity>
          /*style={styles.button}
          onPress={() => navigate('Offer')}
          title="Offer"*/
        <Button onPress={() => navigate('Request')} title="Request" />
        <Button onPress={() => navigate('Info')} title="Info" />
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

class RequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Request',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('ShelterRequest')}
          title="Shelter Request"
        />
      </View>
    );
  }
}

class OfferScreen extends React.Component {
  static navigationOptions = {
    title: 'Offer',
  };
  render() {
    return (
      <View>
        <Button title="Shelter" onPress={this.storeRequest} />
        <Button title="Assistance" onPress={this.storeRequest} />
        <Button title="Supplies" onPress={this.storeRequest} />
        <Button title="Ride" onPress={this.storeRequest} />
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
        <Button title="Shelter" onPress={this.storeRequest} />
        <Button title="Assistance" onPress={this.storeRequest} />
        <Button title="Supplies" onPress={this.storeRequest} />
        <Button title="Ride" onPress={this.storeRequest} />
      </View>
    );
  }
}

class ShelterRequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Shelter Request',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

  storeRequest = type => {
    firebase.database().ref('request' + int).set({
      request: type,
    });
    int = int + 1;
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput
          title="Type"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          title="Address"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button onPress={() => this.storeRequest('shelter')} title="Submit" />
      </View>
    );
  }
}

export default StackNavigator({
  Home: { screen: HomeScreen },
  Offer: { screen: OfferScreen },
  Request: { screen: RequestScreen },
  Info: { screen: InfoScreen },
  ShelterRequest: { screen: ShelterRequestScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  button: {
    padding: 15,
    margin: 6,
    fontSize: 35,
    backgroundColor: '#addd',
  },
});

