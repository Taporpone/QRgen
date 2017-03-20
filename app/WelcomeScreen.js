import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import Text from 'react-native-text'; // Text scaling pkg
import { Actions } from 'react-native-router-flux';


const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.textHeader}
        >
          Turn a ...
        </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.cardButton}>
          <Button
            style={styles.button}
            title='Card'
            onPress={() => Actions.card()}
          />
        </View>
        <View style={styles.noteButton}>
          <Button
            style={styles.button}
            title='Note'
            onPress={() => Actions.note()}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text
          style={styles.textFooter}
        >
          ... into QR code
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'flex-end'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flex: 1,
  },
  noteButton: {
    flex: 1,
    justifyContent: 'center'

  },
  cardButton: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
  },
  footer: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  textFooter: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;