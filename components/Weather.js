import React from 'react';
import propsTypes from 'prop-types'
import {Text, View, StyleSheet} from 'react-native'

const Weather = ({temp}) => {
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Weather;