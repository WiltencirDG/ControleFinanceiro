import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Entries from '../screens/Entries';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const CardStack = createStackNavigator(
  {
    cartao: Entries,
  },
  config
);

CardStack.navigationOptions = {
  tabBarLabel: 'Cartão',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-card${focused ? '' : '-outline'}`
          : 'md-card'
      }
    />
  ),
};

CardStack.path = '';

const BankStack = createStackNavigator(
  {
    banco: Entries,
  },
  config
);

BankStack.navigationOptions = {
  tabBarLabel: 'Banco',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} />
  ),
};

BankStack.path = '';


const tabNavigator = createBottomTabNavigator({
  CardStack,
  BankStack,
});

tabNavigator.path = '';

export default tabNavigator;
