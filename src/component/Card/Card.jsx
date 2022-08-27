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
          {/* <span className='card-content'>{categoryName}</span> */}
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
          {/* <span className='card-item-cost margin'>Rs.{price}</span> */}
          {/* {discount && ( */}
          {/* <>
                <span className='overline-text margin'>
                  Rs.{priceBeforeDiscount}
                </span>
                <span className='sale-perct'>{discPerc}% Off</span>
              </> */}
          {/* )} */}

          {/* <div className='rating-xs-margin'>
            {ratings}
            <span className='fa fa-star checked'></span>
            <span className='xs-margin'>|</span>5
          </div> */}
          {/* {isUserLoggedIn === true ? (
            isOutOfStock === true ? (
              <button className='button card-button ecom-card-button disabled-btn'>
                Add To Cart
              </button>
            ) : isInCart === -1 ? (
              <button
                onClick={() => {
                  addToCartHandler(product);
                }}
                className='button card-button ecom-card-button'
              >
                Add To Cart
              </button>
            ) : (
              <Link to='/cart'>
                <button className='button outline-button card-button ecom-card-button'>
                  Go To Cart
                </button>
              </Link>
            )
          ) : (
            <button
              className='button card-button ecom-card-button'
              onClick={() =>
                navigate(
                  "/login",
                  { state: { from: { pathname: pathname } } },
                  { replace: true }
                )
              }
            >
              Add To Cart
            </button>
          )}

          {isOutOfStock && (
            <span className='overlay-text overlay-text-alignment'>
              Out of Stock
            </span>
          )}
          <span className='badge-overlay'>
            {newItem === true ? "New" : sale === true ? "Sale" : null}
          </span>
          {isUserLoggedIn === true ? (
            isOutOfStock === true ? (
              <i className='fa fa-heart-o icon-size icon-overlay disabled-btn'></i>
            ) : isInWishList === -1 ? (
              <i
                className='fa fa-heart-o icon-btn icon-size icon-overlay'
                onClick={() => addToWishListApi(product)}
              ></i>
            ) : (
              <i
                class='fa fa-heart icon-btn icon-size filled-icon-overlay'
                onClick={() => removeFromWishListApi(_id)}
              ></i>
            )
          ) : (
            <Link to='/login'>
              <i className='fa fa-heart-o icon-btn icon-size icon-overlay'></i>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export { Card };
