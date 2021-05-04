import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js';

const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfoCard />
      <RestaurantInfoCard />
      <RestaurantInfoCard />
      <RestaurantInfoCard />
      <RestaurantInfoCard />
      <RestaurantInfoCard />
    </ListContainer>
  </SafeArea>
);