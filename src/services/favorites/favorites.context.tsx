import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";
import { Restaurant } from "../../domain/model/restaurant";

type FavoritesContextProps = {
  favorites: any[];
  addToFavorites: (restaurant: Restaurant) => void;
  removeFromFavorites: (restaurant: Restaurant) => void;
};

export const FavoritesContext = createContext<FavoritesContextProps | null>(
  null
);

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  // We load Favorites only on the very first mount.
  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
