import React from 'react'

import { StyleSheet, Text, View, } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';


export default function Months(){
    return (
        <View style={styles.months}>
            <Icon name="arrow-back" style={styles.buttons} />
            <Text>{'AGOSTO'}</Text>
            <Icon name="arrow-forward" style={styles.buttons} />
        </View>
    );
}

const styles = StyleSheet.create({
    months: {
        backgroundColor: Colors.background,
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlignVertical: "center",
        flexWrap: 'wrap',
        alignItems:'center',
        height:40,
    },
    buttons: {
        flex:1,
        padding: 5,
    }
});