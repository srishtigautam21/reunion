import React from "react";
import { useFavourite } from "../../hooks/FavouriteContext";
import "./Card.css";

const Card = ({ data }) => {
  const { rent, name, address, noOfBeds, noOfBathroom, area, image, id } = data;
  const { favouritePropertyList, addToFavourites, removeFromFavourites } =
    useFavourite();

  const isInFavourites = favouritePropertyList.findIndex(
    (property) => property.id === id
  );
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
          {isInFavourites === -1 ? (
            <i
              className='fa fa-heart-o icon-btn icon-size icon-overlay'
              onClick={() => addToFavourites(data)}
            ></i>
          ) : (
            <i
              className='fa fa-heart icon-btn icon-size filled-icon-overlay'
              onClick={() => removeFromFavourites(id)}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export { Card };
