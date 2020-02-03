import React from 'react';
import Colors from '../constants/Colors';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class EntryItem extends React.Component {

    state = {
        item: this.props.propitem
    }

    componentDidMount(){
        this.setState({item: this.props.propitem});
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
                <View style={styles.spreadsheet} key={this.state.item.id}>
                    <View style={styles.column}>
                        <View style={styles.item}><Text>{this.state.item.entrada}</Text></View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.item}><Text>{this.state.item.tipo == 'debit' ? '- R$'+this.state.item.valor.toFixed(2) : '  R$'+this.state.item.valor.toFixed(2)}</Text></View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }    
}

const styles = StyleSheet.create({
    column: {
        width: '47%'
    },
    item:{
        borderColor: '#ddd',
        borderWidth: 1,
        paddingStart: 15,
        backgroundColor: '#fff'
    },
    spreadsheet: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    }
});