import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { Favorite } from '../../../components/favorites/favorite.component';

import star from '../../../../assets/star';
import openIcon from '../../../../assets/open';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  StatusIcon,
  Icon,
  Address
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurantadsada',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg',
      // 'https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,g_auto:subject,q_auto,f_auto/restaurant/8ccb0dc6-983a-4f02-ba0c-57d5ad452958/308b624b-539d-4247-b920-09f0273bdd98.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={ 5 }>
      <Favorite restaurant={ restaurant } />
      <RestaurantCardCover key={ name } source={ { uri: photos[0] } } />
      <Info>
        <Text variant="body">{ name }</Text>
        <Section>
          <Rating>
            { ratingArray.map((_, i) => (
              <SvgXml
                key={ `star-${placeId}-${i}` }
                xml={ star }
                width={ 20 }
                height={ 20 }
              />
            )) }
          </Rating>
          <StatusIcon>
            { isClosedTemporarily && (
              <Text variant="error">
                CLOSED TEMPORARILY
              </Text>
            ) }
            <Spacer position='left' size='medium'>
              { isOpenNow && <SvgXml xml={ openIcon } width={ 20 } height={ 20 } /> }
            </Spacer>
            <Spacer position='left' size='medium'>
              <Icon source={ { uri: icon } } />
            </Spacer>
          </StatusIcon>
        </Section>
        <Address>{ address }</Address>
      </Info>
    </RestaurantCard>
  )
};