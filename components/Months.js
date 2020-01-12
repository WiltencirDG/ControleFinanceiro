import React from 'react'

import { StyleSheet, Text, View, } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import monthName from '../utils/util';

export default class Months extends React.Component {
    
    state = {
        date: new Date()
    };

    getMonth = () => {
        return monthName(this.state.date.getMonth()+1);
    };

    getYear = () => {
        return this.state.date.getFullYear();
    };

    render(){
        return (
            <View style={styles.months}>
                <Icon name="arrow-back" style={styles.buttons} onPress={() => {let newDate = this.state.date; newDate.setMonth(newDate.getMonth()-1); this.setState({date: newDate}); this.props.callbackDate(newDate);}}/>
                <Text>{this.getMonth() + ' ' + this.getYear()}</Text>
                <Icon name="arrow-forward" style={styles.buttons} onPress={() => {let newDate = this.state.date; newDate.setMonth(newDate.getMonth()+1); this.setState({date: newDate}); this.props.callbackDate(newDate);}} />
            </View>
        )
    } 
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