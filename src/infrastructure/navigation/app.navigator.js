import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { SafeArea } from '../../components/utilities/safe-area.component';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings-sharp',
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[ route.name ];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={ iconName } size={ size } color={ color } />
    ),
  }
}

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
      <Text>Settings</Text>
      <Button title='logout' onPress={ () => onLogout() }></Button>
    </SafeArea>
  )
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={ createScreenOptions }
      tabBarOptions={ {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      } }>
      <Tab.Screen name="Restaurants" component={ RestaurantsNavigator } />
      <Tab.Screen name="Map" component={ MapScreen } />
      <Tab.Screen name="Settings" component={ SettingsScreen } />
    </Tab.Navigator>
  )
}