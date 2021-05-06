import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-details.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode='none'
      screenOption s={{ ...TransitionPresets.ModalPresentationIOS }}>
      <RestaurantStack.Screen
        name='RestaurantsList'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name='RestaurantDetails'
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  )
}