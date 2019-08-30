import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ActionButton from 'react-native-action-button';
import { Icon, Header, Input } from 'react-native-elements';
import Colors from '../constants/Colors';
import Months from '../components/Months';
import FirebaseService from '../services/firebaseService';
import Modal from "react-native-modal";

export default class CardScreen extends React.Component {

	state = {
		dataList: null,
		isVisible: false
	};
	
	componentDidMount() {
		FirebaseService.getData('cartao/AGOSTO_2019', dataIn => this.setState({dataList: dataIn}), 10);
    };

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	render(){
		
		const {dataList} = this.state;
		
		return (
		<View style={styles.container}>
			<Months style={styles.months}/>
			<ScrollView
				style={styles.container}>
				<View style={styles.spreadsheet}>
					<View style={styles.showColumn}></View>
					
					<View >
						{
							dataList && dataList.map(
								(item, index) => {
									return <View style={styles.spreadsheet} key={index}>
										<View style={styles.column}>
											<View style={styles.item}><Text>{item.entrada}</Text></View>
										</View>
										<View style={styles.column}>
											<View style={styles.item}><Text>{item.tipo == 'debit' ? '- R$'+item.valor.toFixed(2) : '  R$'+item.valor.toFixed(2)}</Text></View>
										</View>
									</View>
								}
							)
						}
					</View>
				</View>
			</ScrollView>
			<ActionButton buttonColor={Colors.actionButton}>
				<ActionButton.Item buttonColor={Colors.actionButtonNovaEntrada} title="Nova entrada" onPress={() => this.toggleModal()}>
					<Icon name="attach-money" style={styles.actionButtonIcon} />
				</ActionButton.Item>
			</ActionButton>

			<Modal 
				isVisible={this.state.isModalVisible}
				onBackButtonPress={this.toggleModal}
				onBackdropPress={this.toggleModal}
				style={styles.containerModal}
			>
				<View style={{flex:1}}>
					<View style={styles.modal}>
						<Input placeholder='Descrição'/>
						<Input placeholder='Valor'/>
						<Input placeholder='Tipo'/>
						<Input placeholder='Nº Parcelas'/>
						
						<View style={styles.modalGroupButtons}>
							<Button onPress={this.toggleModal} title={'Cancelar'} style={styles.cancelarModal}/>
							<Button onPress={this.toggleModal} title={'Confirmar'} style={styles.confirmarModal}/>
						</View>
					</View>
				</View>
			</Modal>
		</View>
		  
		);
	}
}

CardScreen.navigationOptions = {
	header: myHeader
};

function myHeader(){
	return (
	<Header
		containerStyle={{
		backgroundColor: Colors.tintColor,
		}}
		placement="left"
		leftComponent={{ icon: 'menu', color: '#fff' }}
		centerComponent={{ text: 'Controle Financeiro', style: { color: '#fff' } }}
	/>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: Colors.background,
  },
  column: {
    width: '47%'
  },
  showColumn:{
	backgroundColor: Colors.nubank,
	width: '6%',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'center'
  },
  item:{
	borderColor: '#ddd',
	borderWidth: 1,
	paddingStart: 15,
	backgroundColor: '#fff'
  },
  spreadsheet: {
	flexDirection: 'row',
    flexWrap: 'wrap',
	alignItems: 'flex-start',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 20,
    color: 'white',
  },
  modal: {
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: 250,
	backgroundColor: '#fff',
  },
  cancelarModal:{
	flex: 1,
  },
  confirmarModal:{
	flex: 1,
  },
  modalGroupButtons :{
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	
  }
});
