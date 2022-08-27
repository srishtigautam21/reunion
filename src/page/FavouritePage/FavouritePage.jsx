import React from "react";
import { useFavourite } from "../../hooks/FavouriteContext";
import { FavouriteCard } from "../../component/Card/FavouriteCard";
import { Link } from "react-router-dom";

const FavouritePage = () => {
  const { favouritePropertyList } = useFavourite();
  return (
    <div>
      <div className='h-100'>
        <h1 className='cart-page-header'>My Favourites</h1>
        <h2 className='cart-page-header'>
          Your Favourites Page has {favouritePropertyList.length} items
        </h2>
        <Link to='/'>
          <button>Home Page</button>
        </Link>
        <div className='vertical-cards'>
          {favouritePropertyList.map((item) => (
            <FavouriteCard favouritePropertyList={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { FavouritePage };
