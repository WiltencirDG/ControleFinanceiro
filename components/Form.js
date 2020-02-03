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
		tipo: this.props.tipo
	};

	doIt = () => {
        let tela = this.props.tela;
        if(this.state.entrada != '' && this.state.tipo != ''){
            if(this.props.item == null){
                FirebaseService.writeData(tela+'/'+this.formatDate(),this.state.entrada,parseFloat(this.state.valor),this.state.tipo, false);
            }else{
                FirebaseService.writeData(tela+'/'+this.formatDate()+'/'+this.props.item.id,this.state.entrada,parseFloat(this.state.valor),this.state.tipo, true);
            }
            this.props.toggle?.();
        }
    };
    
    formatDate(){
		return monthName(this.props.date.getMonth() + 1) + '_' + this.props.date.getFullYear();
	}

    componentDidMount(){
        if(this.props.item != null){
            this.setState({entrada: this.props.item.entrada, valor: this.props.item.valor, tipo: this.props.item.tipo});
        }
    }

    render(){
        const fields = this.props.fields;
        return (
            <View style={styles.form}>
                {
                    fields.map((item,index) => {
                        return <View key={index}>
                                    <Fumi onChangeText={(text) => {this.setState({[item.campo]: text})}} value={String(this.state[item.campo])} label={item.name} iconClass={FontAwesomeIcon} iconName={item.icon} iconColor={Colors.tintColor} iconSize={20} iconWidth={40} inputPadding={16}/>
                                </View>
                    })
                }
                <View style={styles.modalGroupButtons}>
                    <Button onPress={this.props.toggle} title={'Cancelar'} style={styles.cancelarModal}/>
                    <Button onPress={this.doIt} title={this.props.item == null ? 'Gravar' : 'Atualizar'} style={styles.confirmarModal}/>
                    
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

