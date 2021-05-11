import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utilities/safe-area.component';

import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavoritesArea = styled(SafeArea)`
  margin-top: 0;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ?
    (
      <FavoritesArea>
        <RestaurantList
          data={ favorites }
          renderItem={ ({ item }) => {
            return (
              <TouchableOpacity
                onPress={ () => navigation.navigate('RestaurantDetails', { restaurant: item }) }>
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={ item } />
                </Spacer>
              </TouchableOpacity>
            )
          } }
          keyExtractor={ (item) => item.name }
        />
      </FavoritesArea>
    ) : (
      <NoFavoritesArea>
        <Text center>You have no favorites yet!</Text>
      </NoFavoritesArea>
    );
};