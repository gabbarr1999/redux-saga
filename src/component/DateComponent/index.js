import React from "react";
import { Text, View } from "react-native";
import styles from './style'

const Date = () => {
    return (
        <View style={styles.container}>
            <Text>{new Date().toISOString()}</Text>
        </View>
    )
}

export default Date