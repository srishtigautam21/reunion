import "./App.css";
import { FavouritePage } from "./page/FavouritePage/FavouritePage";
import { PropertiesPage } from "./page/PropertiesPage/PropertiesPage";

function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <PropertiesPage />
      <FavouritePage />
    </div>
  );
}

export default App;
