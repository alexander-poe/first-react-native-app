import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image, 
  TextInput
} from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text style={{ padding: 5, fontSize: 30, color: 'red' }}>
          {this.state.text.split(' ').map((word) => word).join(' ')}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder=".."
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

class Blinker extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };
  
  setInterval(() => {
    this.setState({ showText: !this.state.showText });
  }, 1000);

}
  render() {
    let display = this.state.showText ? this.props.text: ' ';
    return (
      <Text style={ styles.bigblue }>{ display }</Text>
      );
  }
}

class GreatJob extends Component {
  render() {
    let pic = {
      uri: "http://images.all-free-download.com/images/graphiclarge/cute_dog_photo_picture_8_168842.jpg"
    }
    return (
      <View style={styles.container}>
         <Text style={styles.bigblue}>complete the sentence</Text>
         <Image source={{uri: "https://i2.wp.com/petcollectionworld.com/wp-content/uploads/2012/07/bearded-collie-dog.jpg"}} style={{width: 150, height: 150}}/>
         <Blinker text="Hi" style={styles.bigblue}/>
         <Text style={styles.bigblue}>I am a dog and i like to...</Text>
         <Input/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  }
});

Exponent.registerRootComponent(GreatJob);




