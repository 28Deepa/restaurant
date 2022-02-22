import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';

function App() {

  const restaurantList = ["STARBUCKS", "CCD"];

  const displayMenu = () => {

  }

  return (
    <Sidebar restaurantList={restaurantList} displayMenu={displayMenu}/>
  );
}

export default App;
