import "./App.css";
import { FavouritePage } from "./page/FavouritePage/FavouritePage";
import { PropertiesPage } from "./page/PropertiesPage/PropertiesPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PropertiesPage />} />
        <Route path='/favourite' element={<FavouritePage />} />
      </Routes>
    </div>
  );
}

export default App;
