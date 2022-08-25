import { useFilter } from "./FilterContext";
import {
  getLocationFilter,
  getPriceFilter,
  getHouseTypeFilter,
} from "./FilterLogic";

const useFilterHook = () => {
  const { filterState } = useFilter();
  console.log("in hook", filterState);
  const { sortByPrice, sortByLocation, sortByHouse, updatedProperties } =
    filterState;

  const filteredData = [...updatedProperties];

  const locationFilterData = getLocationFilter(filteredData, sortByLocation);
  console.log("location filter", locationFilterData);

  const priceFilterData = getPriceFilter(locationFilterData, sortByPrice);
  console.log("price filter", priceFilterData);

  const finalFilterData = getHouseTypeFilter(priceFilterData, sortByHouse);

  // if (finalFilterData.length === 0) {
  //   return updatedProperties;
  // }
  return finalFilterData; //Final data after all filters are applied
};

export { useFilterHook };
