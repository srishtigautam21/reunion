import React from "react";
import { useFavourite } from "../../hooks/FavouriteContext";
import { FavouriteCard } from "../../component/Card/FavouriteCard";

const FavouritePage = () => {
  const { favouritePropertyList } = useFavourite();
  <div>
    <FavouriteCard favouritePropertyList={favouritePropertyList} />
  </div>;
};

export { FavouritePage };
