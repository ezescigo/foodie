import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

import { SafeArea } from '../../../components/utilities/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js';
import { RestaurantInfoDetails } from '../components/restaurant-info-details.component';

const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIcon = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantInfoDetails />
    </SafeArea>
  )
};