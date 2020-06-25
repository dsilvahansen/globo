import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Alert, TextInput, AsyncStorage } from 'react-native';

export class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passwrd: ''
        }
    }

    cancelLogin = () => {
        Alert.alert('Login Cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    loginUser = () => {
        if (!this.state.username) {
            Alert.alert('Please enter a username');
        }
        else if (!this.state.passwrd) {
            Alert.alert('Please enter a password');
        }
        else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result !== 'none') {
                    Alert.alert('Someone\'s already logged in');
                    this.props.navigation.navigate('HomeRT');
                }
                else {
                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        if (result !== null) {
                            if (result !== this.state.passwrd) {
                                Alert.alert('Password Incorrect');
                            }
                            else{
                                AsyncStorage.setItem('userLoggedIn', this.state.username, (err,result) => {
                                    Alert.alert(`${this.state.username} logged in `);
                                    this.props.navigation.navigate('HomeRT');
                                });
                            }

                        }
                        else{
                            Alert.alert(`${this.state.username} doesn't exist`);
                        }
                    });
                }
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading} >Login</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ passwrd: text })}
                    value={this.state.passwrd}
                    secureTextEntry= {true}
                />
                <Text style={styles.label}>Enter Password</Text>

                <TouchableHighlight underlayColor='#31e981' onPress={this.loginUser}>
                    <Text style={styles.buttons}>
                        Login
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#31e981' onPress={this.cancelLogin}>
                    <Text style={styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        // flex:1,
        width: '80%',
        padding: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
    labels:{
        paddingBottom:10
    }

})