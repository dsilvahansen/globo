import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = () => {
        if (this.state.isloggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isloggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out');
            });
        }
        else {
            this.props.navigate('LoginRT');
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') {
                console.log('none in userLoggedIn in memory');
            }
            else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to none');
                });
            }
            else {
                this.setState({
                    isloggedIn:true,
                    loggedUser:result
                });
            }

        });
    }

    render() {
        let display = this.state.isloggedIn ? this.state.loggedUser : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/Hymnbooklogo.png')}
                />
                <Text
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 2
    },
    logoStyle: {
        flex: 2,
        width: undefined,
        height: undefined
    }

});