import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export class VideoDetails extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        let tubeId = this.props.navigation.getParam('ytubeId', 'No Video');
        let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;
        return (
            <WebView
                style={{marginTop:20}}
                javaScriptEnabled={true}
                source={{uri: tubeUrl}}
            />

        );
    }
}