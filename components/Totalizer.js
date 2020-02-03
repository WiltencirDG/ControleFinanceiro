import React from 'react';
import Colors from '../constants/Colors';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';


export default class Totalizer extends React.Component {

    state = {
        final : 0
    }

    doCalculate(listValues){
        let finalValue = 0;
        
        listValues.forEach(value => {
            if(value.tipo == 'debit'){
                finalValue -= value.valor;
            }else{
                finalValue += value.valor;
            }            
        });
        this.setState({final:finalValue});
    }

    componentWillReceiveProps(){
        this.doCalculate(this.props.listValues);

        this.props.updateTotal = false;
        
    }

    render() {
        return (
            <View style={styles.totalizer}>
                <Text style={styles.totalizerText}>TOTAL: {this.state.final < 0 ? '- R$'+(this.state.final*-1).toFixed(2):'R$'+this.state.final.toFixed(2)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    totalizer: {
        backgroundColor: Colors.tintColor,
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlignVertical: "center",
        flexWrap: 'wrap',
        alignItems:'center',
        height:25
    },
    totalizerText: {
        fontWeight: "bold",
        color: 'white'
    }
});