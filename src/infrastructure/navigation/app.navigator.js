import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigator } from './restaurants.navigator';
import { SettingsNavigator } from './settings.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { CheckoutScreen } from '../../features/checkout/screens/checkout.screen';

import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavoritesContextProvider } from '../../services/favorites/favorites.context';
import { colors } from '../../infrastructure/theme/colors';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Checkout: 'cart',
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

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={ createScreenOptions }
            tabBarOptions={ {
              activeTintColor: colors.brand.primary,
              inactiveTintColor: colors.brand.muted,
            } }>
            <Tab.Screen name="Restaurants" component={ RestaurantsNavigator } />
            <Tab.Screen name="Map" component={ MapScreen } />
            <Tab.Screen name="Checkout" component={ CheckoutScreen } />
            <Tab.Screen name="Settings" component={ SettingsNavigator } />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  )
}