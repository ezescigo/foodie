import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';

export const RestaurantInfoDetails = () => {
  const [ breakfastExpanded, setBreakfastExpanded ] = useState(false);
  const [ lunchExpanded, setLunchExpanded ] = useState(false);
  const [ dinnerExpanded, setDinnerExpanded ] = useState(false);
  const [ drinksExpanded, setDrinksExpanded ] = useState(false);

  return (
    <ScrollView>
      <List.Accordion
        title="Breakfast"
        left={ props => <List.Icon { ...props } icon="coffee" /> }
        expanded={ breakfastExpanded }
        onPress={ () => setBreakfastExpanded(!breakfastExpanded) }
      >
        <List.Item title="Coffee with medialunas" />
        <Divider />
        <List.Item title="Toast with tomatoe and olive oil" />
      </List.Accordion>

      <Divider />

      <List.Accordion
        title="Lunch"
        left={ props => <List.Icon { ...props } icon="food" /> }
        expanded={ lunchExpanded }
        onPress={ () => setLunchExpanded(!lunchExpanded) }
      >

        <List.Item title="Roasted Salmon with salad" />
        <Divider />
        <List.Item title="Cheeseburger with fries or salad" />
      </List.Accordion>

      <Divider />

      <List.Accordion
        title="Dinner"
        left={ props => <List.Icon { ...props } icon="chef-hat" /> }
        expanded={ dinnerExpanded }
        onPress={ () => setDinnerExpanded(!dinnerExpanded) }
      >
        <List.Item title="Ravioli 4 Formaggi" />
        <Divider />
        <List.Item title="Asado with fries" />
      </List.Accordion>

      <Divider />

      <List.Accordion
        title="Drinks"
        left={ props => <List.Icon { ...props } icon="glass-cocktail" /> }
        expanded={ drinksExpanded }
        onPress={ () => setDrinksExpanded(!drinksExpanded) }
      >
        <List.Item title="Old Fashioned" />
        <Divider />
        <List.Item title="Fernet Branca" />
      </List.Accordion>
    </ScrollView>
  );
};