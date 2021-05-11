import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

import { FavoritesBar } from '../../../components/favorites/favorites-bar.component.js';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utilities/safe-area.component';
import { FadeInView } from '../../../components/animations/fade.animation';
import { Search } from '../components/search.component';

import { RestaurantList } from '../components/restaurant-list.styles';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';

const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIcon = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [ isToggled, setIsToggled ] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      { isLoading && (
        <LoaderContainer>
          <LoadingIcon animating={ true } size={ 50 } color={ Colors.red800 } />
        </LoaderContainer>
      ) }
      <Search
        isFavoritesToggled={ isToggled }
        onFavoritesToggle={ () => setIsToggled(!isToggled) }
      />
      {isToggled && <FavoritesBar favorites={ favorites } onNavigate={ navigation.navigate } /> }
      <RestaurantList
        data={ restaurants }
        renderItem={ ({ item }) => {
          return (
            <TouchableOpacity
              onPress={ () => navigation.navigate('RestaurantDetails', { restaurant: item }) }>
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={ item } />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          )
        } }
        keyExtractor={ (item) => item.name }
      />
    </SafeArea>
  )
};