import { useContext, createContext, useState } from "react";

const FavouriteContext = createContext({});

const FavouriteProvider = ({ children }) => {
  const [favouritePropertyList, setFavouritePropertyList] = useState([]);
  const addToFavourites = (data) => {
    setFavouritePropertyList((prev) => [...prev, data]);
  };
  const removeFromFavourites = (id) => {
    setFavouritePropertyList((prev) =>
      prev.filter((property) => property.id !== id)
    );
  };

  return (
    <FavouriteContext.Provider
      value={{
        favouritePropertyList,
        setFavouritePropertyList,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
const useFavourite = () => useContext(FavouriteContext);
export { FavouriteProvider, useFavourite };
