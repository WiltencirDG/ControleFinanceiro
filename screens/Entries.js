import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ActionButton from 'react-native-action-button';
import { Icon, Header, Input, registerCustomIconType } from 'react-native-elements';
import Colors from '../constants/Colors';
import Months from '../components/Months';
import EntryItem from '../components/EntryItem';
import Form from '../components/Form';
import FirebaseService from '../services/firebaseService';
import Modal from "react-native-modal";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import monthName from '../utils/util';
import Totalizer from '../components/Totalizer';

export default class Entries extends React.Component {
	
	fields = [{name:'Descrição','icon':'align-justify','campo':'entrada'},
			  {name:'Valor','icon':'money','campo':'valor'}];

			  
	state = {
		dataList: [],
		isVisible: false,
		item: null,
		type: '',
		date: new Date(),
		screen: this.props.navigation.state.routeName,
		updateTotal : false
	};

	componentDidMount() {
		this.getData();
	};

	getData = () => {
		FirebaseService.getData(this.state.screen+'/'+this.formatDate(), dataIn => {this.setState({dataList: dataIn});this.toggleUpdater();});
	}

	deleteEntry = () => {
		FirebaseService.removeData(this.state.screen+'/'+this.formatDate()+'/'+this.state.item.id);
	}

	callbackNewDate = (newDate) => {
		this.setState({date:newDate, dataList: [], updateTotal: !this.state.updateTotal});
		this.getData();
	}
	
	formatDate(){
		return monthName(this.state.date.getMonth() + 1) + '_' + this.state.date.getFullYear();
	}

	toggleModal = () => {
		this.setState({ isVisible: !this.state.isVisible});
		this.getData();
	};

	toggleUpdater = () => {
		this.setState({ updateTotal: !this.state.updateTotal});
	}

	render(){
				
		return (
		<View style={styles.container}>
			<Months style={styles.months} callbackDate={this.callbackNewDate}/>
			<ScrollView
				style={styles.container}>
				<View style={styles.spreadsheet}>
					<View style={styles.showColumn}></View>
					
					<View >
						{
							this.state.dataList && this.state.dataList.map(
								(item,index) => {
									return <EntryItem propitem={item} key={item.id+item.entrada+item.tipo+item.valor} onPress={() => {this.setState({item:item}); this.toggleModal()}} onLongPress={()=>{this.setState({item:item}); this.deleteEntry()}}/>
								}
							)
						}
					</View>
				</View>
			</ScrollView>
			<ActionButton buttonColor={Colors.actionButton}>
				<ActionButton.Item buttonColor={Colors.actionButtonNovaEntrada} title="Nova entrada" onPress={() => {this.setState({item: null,type:'credit'});this.toggleModal();}}>
					<Icon name="attach-money" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item buttonColor={Colors.actionButtonNovaSaida} title="Nova saída" onPress={() => {this.setState({item: null, type:'debit'});this.toggleModal();}}>
					<Icon name="attach-money" style={styles.actionButtonIcon} />
				</ActionButton.Item>
			</ActionButton>

			<Modal 
				isVisible={this.state.isVisible}
				onBackButtonPress={this.toggleModal}
				onBackdropPress={this.toggleModal}
				style={styles.containerModal}>

				<View>

					<Form item={this.state.item} tipo={this.state.type} fields={this.fields} toggle={this.toggleModal} date={this.state.date} tela={this.state.screen}/>
				</View>
			</Modal>

			<Totalizer updateTotal={this.state.updateTotal} listValues={this.state.dataList}/>
		</View>
		  
		);
	}
}

Entries.navigationOptions = {
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
  containerModal: {
	padding:10,
	margin:50,
  },
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
	justifyContent: 'center',
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
	justifyContent: 'space-around',
	backgroundColor: '#fff',
	paddingBottom: 15,
	paddingTop: 15,
  }
});
