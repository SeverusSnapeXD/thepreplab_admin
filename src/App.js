import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter,Route , Routes } from 'react-router-dom'
import AddFood from './screens/AddFood/AddFood';
import Explore from './screens/Explore/Explore';
import ViewFood from './screens/ViewFood/ViewFood';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <BrowserRouter>
          <Sidebar/>
          <Routes>
            <Route path='/' element={ <MainDash/>} />
            <Route path='/addfood' element={ <AddFood/>} />
            <Route path='/explore' element={<Explore/>} />
            <Route path='/viewfood' element={<ViewFood/>} />
          
          </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
