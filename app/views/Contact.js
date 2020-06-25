import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, ScrollView } from 'react-native';
import { Header } from '../sections/Header.js';

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Enter message',
            name: 'Enter your name',
            email: 'Enter your Email Address'
        }
    }

    clearFields = () => this.setState({ name: '', msg: '', email: '' });

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    }

    render() {
        const {navigate} =this.props.navigation;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Header navigate={navigate} message='Press to Login' />
                <Text style={styles.heading} >Contact us</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />

                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({ msg: text })}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                />

                <TouchableHighlight underlayColor='#31e981' onPress={this.sendMessage}>
                    <Text style={styles.buttons}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#31e981' onPress={this.clearFields}>
                    <Text style={styles.buttons}>
                        Reset Form
                    </Text>
                </TouchableHighlight>

           </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
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
    multiInput: {
        // flex:2,
        paddingTop: 20,
        width: '90%'
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }

})