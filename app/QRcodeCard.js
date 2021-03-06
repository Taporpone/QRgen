import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Alert,
    KeyboardAvoidingView
} from 'react-native';

import QRCode from 'react-native-qrcode';
import { Actions } from 'react-native-router-flux';
import { takeSnapshot, dirs } from "react-native-view-shot";
const { PictureDir } = dirs;

export default class QRcodeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                format: "png",
                quality: 0.9,
                result: "file",
            },
            filename: ''
        }
    }
    snapshot(refname) {
        takeSnapshot(this.refs[refname], this.state.value)
            .then(
            uri => Alert.alert('Success!', uri),
            error => Alert.alert('Error', error)
            );
    }
    render() {
        const { fullName, company, address, phone, email, www } = this.props;
        const printOut = `${fullName}\n${company}\n${address}\n${phone}\n${email}\n${www}\n`;
        return (
            <KeyboardAvoidingView behavior='height' style={styles.container}>
                <View
                    style={{ backgroundColor: 'white', padding: 10 }}
                    collapsable={false}
                    ref='qrcode'>
                    <QRCode
                        value={printOut}
                        size={300}
                        bgColor='black'
                        fgColor='white' />
                </View>
                <View style={styles.buttonContainer}>
                    <View>
                        <Button
                            title='Back'
                            style={styles.button}
                            onPress={() => {
                                Actions.card({
                                    fullName,
                                    address,
                                    phone,
                                    www,
                                    email,
                                    company
                                });
                            }}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={this.state.filename}
                        onChangeText={(filename) => {
                            this.setState({ filename });
                            this.setState({ value: { ...this.state.value, path: PictureDir + '/' + filename + '.png' } })
                        }}
                        placeholder={'Save as...'}
                    />
                    <View>
                        <Button
                            title='Save'
                            style={styles.button}
                            onPress={() => {
                                this.state.filename === '' ? Alert.alert('Enter filename', 'Filename cannot be empty') : this.snapshot('qrcode');
                            }}
                        />
                    </View>
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
        alignItems: 'center',
        backgroundColor: '#039BE5',
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        flex: 2,
        height: 40,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#E1F5FE',
        backgroundColor: '#4FC3F7',
    },
    button: {
        flex: 1
    }
});