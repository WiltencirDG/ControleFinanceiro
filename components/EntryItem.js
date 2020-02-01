import React from 'react';
import Colors from '../constants/Colors';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';

export default class EntryItem extends React.Component {

    state = {
        item: this.props.propitem
    }

    componentDidMount(){
        console.log(this.props.propitem);
        this.setState({item: this.props.propitem});
    }
    
    render() {
        return (
            <View style={styles.spreadsheet} key={this.props.index}>
                <View style={styles.column}>
                    <View style={styles.item}><Text>{this.state.item.entrada}</Text></View>
                </View>
                <View style={styles.column}>
                    <View style={styles.item}><Text>{this.state.item.tipo == 'debit' ? '- R$'+this.state.item.valor.toFixed(2) : '  R$'+this.state.item.valor.toFixed(2)}</Text></View>
                </View>
            </View>    
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