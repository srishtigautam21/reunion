import {
  useContext,
  createContext,
  // useState,
  useReducer,
  useEffect,
} from "react";
import { propertyData } from "../db";
const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  // eslint-disable-next-line
  // const [properties, setProperties] = useState(propertyData);
  // useEffect(() => {
  //   setProperties((prev) => [...prev, propertyData]);
  // }, []);

  useEffect(() => {
    filterDispatch({ type: "initializer", payload: propertyData });
  }, []);

  const initialFilterState = {
    sortByLocation: "none",
    sortByPrice: "none",
    sortByHouse: "none",
    updatedProperties: [],
  };
  // console.log(initialFilterState.sortByPrice);
  // console.log(initialFilterState.sortByLocation);
  // console.log(initialFilterState.sortByHouse);
  const filterReducer = (state, action) => {
    // console.log("into reducer", action.type, action.payload);
    switch (action.type) {
      case "initializer":
        return {
          ...state,
          updatedProperties: action.payload,
        };
      case "SORT_BY_LOCATION":
        return {
          ...state,
          sortByLocation: action.payload,
        };
      case "SORT_BY_PRICE":
        return {
          ...state,
          sortByPrice: action.payload,
        };
      case "SORT_BY_HOUSE":
        return {
          ...state,
          sortByHouse: action.payload,
        };
      case "CLEAR_ALL":
        return {
          ...action.payload,
          updatedProperties: [...state.updatedProperties],
        };

      default:
        return state;
    }
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );
  return (
    <FilterContext.Provider
      value={{ filterDispatch, filterState, initialFilterState }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
