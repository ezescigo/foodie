import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavoritesContext } from '../../services/favorites/favorites.context';


const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  // optimizable if our restaurants array becomes too big (could be a bottle neck / performance issue).
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavoriteButton
      onPress={ () => !isFavorite
        ? addToFavorites(restaurant)
        : removeFromFavorites(restaurant)
      }
    >
      <Ionicons
        name={ isFavorite ? "md-heart-sharp" : "md-heart-outline" }
        size={ 24 }
        color={ isFavorite ? "red" : "white" }
      />
    </FavoriteButton>
  );
};