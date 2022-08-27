import { useState } from "react";
import { useFilter } from "../../hooks/FilterContext";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Filter.css";

const Filter = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { filterDispatch, filterState } = useFilter();
  return (
    <div className='filter-wrapper'>
      <label className='filter-input' htmlFor='input-location'>
        Location:
        <select
          id='input-location'
          name='tags'
          className='border sm-pd'
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
          <option value='Chicago'>Chicago, Illinois</option>
          <option value='SanFrancisco'>San Francisco, California</option>
          <option value='Houstan'>Houstan, Texas</option>
        </select>
      </label>
      <label className='filter-input' htmlFor='input-price'>
        Price:
        <select
          id='input-price'
          name='price'
          className='border sm-pd'
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
      <label className='filter-input' htmlFor='property-type'>
        Property Type:
        <select
          id='property-type'
          name='property'
          className='border sm-pd'
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
      <label className='filter-input'>
        Date:
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat='dd/MM/yyyy'
          minDate={new Date()}
          showYearDropdown
          scrollableMonthYearDropdown
          placeholderText='Select the date to move in'
          className='border sm-pd'
        />
      </label>
      <Link to='/favourite'>
        <button className='lg-button'>Favourite Page</button>
      </Link>
    </div>
  );
};

export { Filter };
