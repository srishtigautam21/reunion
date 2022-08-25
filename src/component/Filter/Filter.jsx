import React from "react";
import { useFilter } from "../../hooks/FilterContext";

const Filter = () => {
  const { filterDispatch, properties, filterState } = useFilter();
  return (
    <div>
      <label htmlFor='input-location'>
        Location:
        <select
          id='input-location'
          name='tags'
          className='border-note sm-pd tags'
          placeholder='Select your preferred location'
          value={filterState.sortByLocation}
          onChange={(e) =>
            filterDispatch({
              type: "SORT_BY_LOCATION",
              payload: e.target.value,
            })
          }
        >
          <option value='none'>None</option>
          <option value='Jacksonville'>Jacksonville, Florida</option>
          <option value='LosAngeles'>Los Angeles, California</option>
          <option value='>Chicago'>Chicago, Illinois</option>
          <option value='SanFrancisco'>San Francisco, California</option>
          <option value='Houston'>Houston, Texas</option>
        </select>
      </label>
      <label htmlFor='input-price'>
        Price:
        <select
          id='input-price'
          name='price'
          className='border-note sm-pd tags'
          placeholder='select the price range'
          value={filterState.sortByPrice}
          onChange={(e) =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: e.target.value,
            })
          }
        >
          <option value='none'>None</option>
          <option value='one'>$500-$2000</option>
          <option value='two'>$2000-$3500</option>
          <option value='three'>$3500-$5000</option>
        </select>
      </label>
      <label htmlFor='property-type'>
        Property Type:
        <select
          id='property-type'
          name='property'
          className='border-note sm-pd tags'
          placeholder='Select the type of property'
          value={filterState.sortByHouse}
          onChange={(e) =>
            filterDispatch({
              type: "SORT_BY_HOUSE",
              payload: e.target.value,
            })
          }
        >
          <option value='none'>None</option>
          <option value='bunglow'>Bunglow</option>
          <option value='apartment'>Apartment</option>
          <option value='studio-apartment'>Studio apartment</option>
        </select>
      </label>
    </div>
  );
};

export { Filter };
