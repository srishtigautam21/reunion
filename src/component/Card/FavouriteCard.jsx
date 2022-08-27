import React from "react";
import { useFavourite } from "../../hooks/FavouriteContext";

const FavouriteCard = ({ favouritePropertyList }) => {
  const { removeFromFavourites } = useFavourite();
  const { rent, name, address, noOfBeds, noOfBathroom, area, id, image } =
    favouritePropertyList;
  return (
    <div>
      <div className='parent-positioning card-container'>
        <img src={image} alt={name}></img>
        <div className='inside-container '>
          <h2>$ {rent}</h2>
          <h3>{name}</h3>

          <p>{address}</p>
          <div>
            <p>{noOfBeds} beds</p>
            <p>{noOfBathroom} bathroom</p>
            <p>{area} sq.meter</p>
          </div>

          <i
            className='fa fa-heart icon-btn icon-size filled-icon-overlay'
            onClick={() => removeFromFavourites(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export { FavouriteCard };
