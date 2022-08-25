const getLocationFilter = (filteredData, sortByLocation) => {
  if (sortByLocation !== "none") {
    return filteredData.filter(
      (property) => property.location === sortByLocation
    );
  } else {
    return filteredData;
  }
};

const getPriceFilter = (locationFilterData, sortByPrice) => {
  if (sortByPrice === "one") {
    return locationFilterData.filter(
      (property) => property.rent >= 500 && property.rent < 2000
    );
  } else if (sortByPrice === "two") {
    return locationFilterData.filter(
      (property) => property.rent >= 2000 && property.rent < 3500
    );
  } else if (sortByPrice === "three") {
    return locationFilterData.filter(
      (property) => property.rent >= 3500 && property.rent <= 5000
    );
  } else {
    return locationFilterData;
  }
};

const getHouseTypeFilter = (priceFilterData, sortByHouse) => {
  if (sortByHouse !== "none") {
    return priceFilterData.filter((property) => property.type === sortByHouse);
  } else {
    return priceFilterData;
  }
};

export { getPriceFilter, getLocationFilter, getHouseTypeFilter };
