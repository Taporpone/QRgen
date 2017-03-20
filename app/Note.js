import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';

import Text from 'react-native-text'; // Text scaling pkg
import { Actions } from 'react-native-router-flux';

export default class NoteCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteText: this.props.data || ''
        };
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='height' style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        multiline={true}
                        style={styles.inputField}
                        placeholder={'Your note comes here'}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                    />
                </View>
                <View style={styles.buttons}>
                    <Button
                        title='Back'
                        onPress={() => {
                            Keyboard.dismiss()
                            Actions.welcome();
                        }
                        }
                    />
                    <Button
                        title='Clear'
                        onPress={() => this.setState({ noteText: '' })}
                    />
                    <Button
                        title='Show'
                        onPress={() => {
                            Actions.qrcode(this.state.noteText);
                        }
                        }
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#039BE5',
        justifyContent: 'center',
    },
    inputContainer: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    inputField: {
        backgroundColor: '#4FC3F7',
        borderColor: '#E1F5FE',
        textAlignVertical: 'top',
        height: 150,
        borderWidth: 1,
        fontSize: 20,
        lineHeight: 20,
        paddingLeft: 5,
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});