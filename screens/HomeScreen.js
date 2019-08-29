import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import { Icon, Header } from 'react-native-elements';
import Colors from '../constants/Colors';
import  Months  from '../components/Months';
import FirebaseService from '../services/firebaseService';
import NumberFormat from 'react-number-format';

export default class HomeScreen extends React.Component {

	state = {
		dataList: null,
	};
	
	componentDidMount() {
		FirebaseService.getDataList('cartao/AGOSTO_2019', dataIn => this.setState({dataList: dataIn}), 10);
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
						
						<View>
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
				  <ActionButton.Item buttonColor={Colors.actionButtonNovaEntrada} title="Nova entrada" onPress={() => alert("notes tapped!")}>
					  <Icon name="attach-money" style={styles.actionButtonIcon} />
				  </ActionButton.Item>
			  </ActionButton>
		  </View>
		  
		);
	}
}

HomeScreen.navigationOptions = {
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
});
