import React from "react";
import { StyleSheet } from "react-native";

const CommonStyle = StyleSheet.create({
    flex: {
        flex: 1
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    justifyCenter: {
        flex: 1,
        justifyContent: 'center'
    },
    centerAlign: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CommonStyle