import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from "./location.service.js";

type LocationContextProps = {
  location;
  isLoading;
  error;
  search: (searchKeyword: string) => void;
  keyword: string;
};

export const LocationContext = createContext<LocationContextProps | null>(null);

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState<string>("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
