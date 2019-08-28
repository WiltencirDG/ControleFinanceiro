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

export default function HomeScreen() {
  return (
    <View style={styles.container}>
		<Months style={styles.months}/>
		<ScrollView
			style={styles.container}>
			<View style={styles.spreadsheet}>
				<View style={styles.showColumn}></View>
				<View style={styles.column}>
					<View style={styles.item}><Text>{'PicPay'}</Text></View>
					<View style={styles.item}><Text>{'Pizza'}</Text></View>
					<View style={styles.item}><Text>{'Recarga'}</Text></View>
					<View style={styles.item}><Text>{'Uber'}</Text></View>
					<View style={styles.item}><Text>{'Uber'}</Text></View>
					<View style={styles.item}><Text>{'Panificadora'}</Text></View>
					<View style={styles.item}><Text>{'Uber'}</Text></View>
					<View style={styles.item}><Text>{'iFood'}</Text></View>
					<View style={styles.item}><Text>{'Uber'}</Text></View>
					<View style={styles.item}><Text>{'Estorno rotativo'}</Text></View>
					<View style={styles.item}><Text>{'Adiantamento'}</Text></View>
					<View style={styles.item}><Text>{'Passagens'}</Text></View>
					<View style={styles.item}><Text>{'Recarga'}</Text></View>
					<View style={styles.item}><Text>{'Uber'}</Text></View>
					<View style={styles.item}><Text>{'Uber'}</Text></View>
					<View style={styles.item}><Text>{'Spotify'}</Text></View>
					<View style={styles.item}><Text>{'Netflix'}</Text></View>
				</View>
				<View style={styles.column}>
					<View style={styles.item}><Text>{'-R$ 1.600,00'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 21,90'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 10,00'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 35,62'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 3,91'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 3,50'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 16,80'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 22,50'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 20,32'}</Text></View>
					<View style={styles.item}><Text>{'R$ 16,84'}</Text></View>
					<View style={styles.item}><Text>{'R$ 214,64'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 148,03'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 20,00'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 38,02'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 27,87'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 26,90'}</Text></View>
					<View style={styles.item}><Text>{'-R$ 32,00'}</Text></View>
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
	paddingEnd: 15,
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
