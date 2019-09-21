import React, {Component} from 'react'

import {StyleSheet, Text,View} from 'react-native';
import Colors from '../constants/Colors';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

export default class Form extends Component{

    render(){
        console.log(JSON.stringify(this.props.fields));
        const fields = this.props.fields;
        return (
            <View style={styles.form}>
                {
                    fields.map((item,index) => {
                        return <View key={index}>
                                    <Fumi label={item.name} iconClass={FontAwesomeIcon} iconName={item.icon} iconColor={Colors.tintColor} iconSize={20} iconWidth={40} inputPadding={16}/>
                                </View>
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
        form: {
        backgroundColor: Colors.background,
        justifyContent: 'space-around',
        textAlignVertical: "center",
        flexWrap: 'wrap',
    }
});

