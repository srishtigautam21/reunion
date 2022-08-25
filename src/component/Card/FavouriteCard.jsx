import React from "react";

const FavouriteCard = ({ favouritePropertyList }) => {
  return (
    <div className='h-100'>
      <h1 className='cart-page-header'>My Favourites</h1>
      <h2 className='cart-page-header'>
        Your Favourites Page has {favouritePropertyList.length} items
      </h2>
      <div className='vertical-cards'>
        {favouritePropertyList.map((item) => {
          const { rent, name, address, noOfBeds, noOfBathroom, area, id } =
            item;
          return (
            <div key={id}>
              <div>{name}</div>
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
          );
        })}
      </div>
    </div>
  );
};

export { FavouriteCard };
