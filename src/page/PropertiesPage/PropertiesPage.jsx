import "./PropertiesPage.css";
import { propertyData } from "../../db";
import { Card } from "../../component/Card/Card";
import { Filter } from "../../component/Filter/Filter";
import { useFilterHook } from "../../hooks/useFilterHook";

const PropertiesPage = () => {
  const finalFilterData = useFilterHook();
  console.log("In properties", finalFilterData);
  return (
    <div className='property-page-container'>
      <Filter />
      <div className='page-wrapper'>
        {finalFilterData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export { PropertiesPage };
