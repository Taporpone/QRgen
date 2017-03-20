import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Button,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import Text from 'react-native-text'; // Text scaling pkg
import { Actions } from 'react-native-router-flux';

export default class CardCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: this.props.fullName || '',
      company: this.props.company || '',
      address: this.props.address || '',
      phone: this.props.phone || '',
      email: this.props.email || '',
      www: this.props.www || ''
    }
  }
  clearInput() {
    this.setState({ fullName: '', company: '', address: '', phone: '', email: '', www: '' });
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='height' style={styles.container}>
        <TextInput
          style={styles.inputField}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={'Name'}
          onChangeText={(fullName) => this.setState({ fullName })}
          value={this.state.fullName}
        />
        <TextInput
          style={styles.inputField}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={'Company'}
          onChangeText={(company) => this.setState({ company })}
          value={this.state.company}
        />
        <TextInput
          style={styles.inputField}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={'Address'}
          onChangeText={(address) => this.setState({ address })}
          value={this.state.address}
        />
        <TextInput
          style={styles.inputField}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={'Phone'}
          onChangeText={(phone) => this.setState({ phone })}
          value={this.state.phone}
          keyboardType={'phone-pad'}
        />
        <TextInput
          style={styles.inputField}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={'Email'}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.inputField}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={'www'}
          onChangeText={(www) => this.setState({ www })}
          value={this.state.www}
          keyboardType={'url'}
        />
        <View style={styles.buttons}>
          <Button
            title='Back'
            onPress={() => {
              Keyboard.dismiss();
              Actions.welcome()
              }
            }
          />
          <Button
            title='Clear'
            onPress={() => this.clearInput()}
          />
          <Button
            title='Show'
            onPress={() => {
              Keyboard.dismiss();
              Actions.qrcodecard({
                fullName: this.state.fullName,
                address: this.state.address,
                company: this.state.company,
                phone: this.state.phone,
                www: this.state.www,
                email: this.state.email
              });
            }
            }
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputField: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    fontSize: 20,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
    padding: 2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});