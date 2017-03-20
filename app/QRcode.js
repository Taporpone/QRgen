import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Alert,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';

import QRCode from 'react-native-qrcode';
import { Actions } from 'react-native-router-flux';
import { takeSnapshot, dirs } from "react-native-view-shot";
const { PictureDir } = dirs;

export default class QRcode extends Component {
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
        return (
            <KeyboardAvoidingView behavior='height' style={styles.container}>
                <View
                    style={{backgroundColor:'white', padding: 10}}
                    collapsable={false}
                    ref='qrcode'>
                    <QRCode
                        style={styles.qrcode}
                        value={this.props.data}
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
                                Keyboard.dismiss();
                                Actions.note(this.props.data);
                                }
                            }
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={this.state.filename}
                        onChangeText={(filename) => {
                            this.setState({ filename });
                            this.setState({ value: { ...this.state.value, path: PictureDir + '/' + filename + '_QRcode.png' } })
                        }}
                        placeholder={'Save as...'}
                    />
                    <View>
                        <Button
                            title='Save'
                            style={styles.button}
                            onPress={() => {
                                Keyboard.dismiss();
                                this.state.filename === '' ? Alert.alert('Enter filename', 'Filename cannot be empty') : this.snapshot('qrcode');
                                }
                            }
                        />
                    </View>

                </View>
            </KeyboardAvoidingView>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        borderColor: 'black'
    },
    button: {
        flex: 1,
        marginTop: 20,
    }
});