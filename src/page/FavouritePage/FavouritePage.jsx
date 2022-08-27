import React from "react";
import { useFavourite } from "../../hooks/FavouriteContext";
import { FavouriteCard } from "../../component/Card/FavouriteCard";
import { Link } from "react-router-dom";
import "./FavouritePage.css";

const FavouritePage = () => {
  const { favouritePropertyList } = useFavourite();
  return (
    <div>
      <div className='h-100 favourite-page-wrapper'>
        <h1 className='cart-page-header'>My Favourites</h1>
        <h2 className='cart-page-header'>
          Your Favourites Page has {favouritePropertyList.length} items
        </h2>

        <div className='vertical-cards'>
          {favouritePropertyList.map((item) => (
            <FavouriteCard favouritePropertyList={item} key={item.id} />
          ))}
        </div>
        <Link to='/'>
          <button className='lg-button'>Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export { FavouritePage };
