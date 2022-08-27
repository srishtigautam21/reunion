import { useFilter } from "./FilterContext";
import {
  getLocationFilter,
  getPriceFilter,
  getHouseTypeFilter,
} from "./FilterLogic";

const useFilterHook = () => {
  const { filterState } = useFilter();

  const { sortByPrice, sortByLocation, sortByHouse, updatedProperties } =
    filterState;

  const filteredData = [...updatedProperties];

  const locationFilterData = getLocationFilter(filteredData, sortByLocation);

  const priceFilterData = getPriceFilter(locationFilterData, sortByPrice);

  const finalFilterData = getHouseTypeFilter(priceFilterData, sortByHouse);

  return finalFilterData; //Final data after all filters are applied
};

export { useFilterHook };
