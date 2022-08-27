import React from "react";
import { useFavourite } from "../../hooks/FavouriteContext";

const FavouriteCard = ({ favouritePropertyList }) => {
  const { removeFromFavourites } = useFavourite();
  const { rent, name, address, noOfBeds, noOfBathroom, area, id } =
    favouritePropertyList;
  return (
    <div>
      <div className='parent-positioning '>
        {/* <img src={image} alt={name}></img> */}
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

          <i
            className='fa fa-heart icon-btn icon-size filled-icon-overlay'
            onClick={() => removeFromFavourites(id)}
          ></i>

          {/* <div className='wishlistCard-container  w-100'>
                <div className=' card-container bottom-margin'>
                  <div className='parent-positioning'>
                    <img src={image} alt={name} />
                    <div className='inside-container '>
                      <h3>{name}</h3>
                      <span className='card-content'>{categoryName}</span>
                      <p>
                        <span className='card-item-cost margin'>
                          Rs.{price}
                        </span>
                        {discount && (
                          <>
                            <span className='overline-text margin'>
                              Rs.{priceBeforeDiscount}
                            </span>
                            <span className='sale-perct'>{discPerc}% Off</span>
                          </>
                        )}
                      </p>
                      <div className='rating-xs-margin'>
                        {ratings}
                        <span className='fa fa-star checked'></span>
                        <span className='xs-margin'>|</span>5
                      </div>
                      {cartlistitem.findIndex(
                        (prod) => prod._id === item._id
                      ) === -1 ? (
                        <button
                          className='button card-button ecom-card-button'
                          onClick={() => moveToCartHandler(_id, item)}
                        >
                          Move to Cart
                        </button>
                      ) : (
                        <Link to='/cart'>
                          <button className='button card-button  ecom-card-button'>
                            Go to Cart
                          </button>
                        </Link>
                      )}
                      <span className='badge-overlay'>
                        {newItem ? "New" : sale ? "Sale" : null}
                      </span>
                      <i
                        onClick={() => removeFromWishListApi(_id)}
                        className='fa fa-heart icon-btn icon-size filled-icon-overlay'
                      ></i>
                    </div>
                  </div>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export { FavouriteCard };
