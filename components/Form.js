import React, {Component} from 'react'

import Colors from '../constants/Colors';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

import FirebaseService from '../services/firebaseService';
import monthName from '../utils/util';
export default class Form extends Component{

    state = {
		entrada: '',
		valor: 0,
		tipo: ''
	};

	createEntrada = () => {
		FirebaseService.writeData('cartao/'+this.formatDate(),this.state.entrada,parseFloat(this.state.valor),this.state.tipo);
        this.props.toggle?.();
    };
    
    formatDate(){
		return monthName(this.props.date.getMonth() + 1) + '_' + this.props.date.getFullYear();
	}

    render(){
        console.log(JSON.stringify(this.props.fields));
        const fields = this.props.fields;
        return (
            <View style={styles.form}>
                {
                    fields.map((item,index) => {
                        return <View key={index}>
                                    <Fumi onChangeText={(text) => {this.setState({[item.campo]: text})}} label={item.name} iconClass={FontAwesomeIcon} iconName={item.icon} iconColor={Colors.tintColor} iconSize={20} iconWidth={40} inputPadding={16}/>
                                </View>
                    })
                }
                <View style={styles.modalGroupButtons}>
                    <Button onPress={this.props.toggle} title={'Cancelar'} style={styles.cancelarModal}/>
                    <Button onPress={this.createEntrada} title={'Confirmar'} style={styles.confirmarModal}/>
                </View>
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
    },
    cancelarModal:{
        flex: 1,
    },
    confirmarModal:{
        flex: 1,
    },
    modalGroupButtons :{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingBottom: 15,
        paddingTop: 15,
    }
});

