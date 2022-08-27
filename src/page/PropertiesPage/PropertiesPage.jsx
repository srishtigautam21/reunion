import "./PropertiesPage.css";
import { propertyData } from "../../db";
import { Card } from "../../component/Card/Card";
import { Filter } from "../../component/Filter/Filter";
import { useFilterHook } from "../../hooks/useFilterHook";
import { useFilter } from "../../hooks/FilterContext";

const PropertiesPage = () => {
  const finalFilterData = useFilterHook();
  const { filterDispatch, initialFilterState } = useFilter();
  // console.log("In properties", finalFilterData);
  const backToInitialProperties = () => {
    filterDispatch({ type: "initializer", payload: propertyData });
    filterDispatch({
      type: "CLEAR_ALL",
      payload: {
        ...initialFilterState,
      },
    });
  };
  return (
    <div className='property-page-container'>
      <Filter />
      <div className='page-wrapper'>
        {finalFilterData.length === 0 ? (
          <div className='no-property'>
            <div>No properties match the given filter</div>
            <button
              className='lg-button'
              onClick={() => backToInitialProperties()}
            >
              Check other properties
            </button>
          </div>
        ) : (
          finalFilterData.map((data) => <Card key={data.id} data={data} />)
        )}
      </div>
    </div>
  );
};

export { PropertiesPage };
