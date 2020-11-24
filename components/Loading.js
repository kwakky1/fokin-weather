import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>오늘의 미친 날씨를 받아보자</Text>
        </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 35,
        paddingVertical: 350,
        backgroundColor: '#FDF6AA'
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30
    }
});