import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter,Route , Routes } from 'react-router-dom'
import AddFood from './screens/AddFood';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <BrowserRouter>
          <Sidebar/>
          <Routes>
            <Route path='/' element={ <MainDash/>} />
            <Route path='/addfood' element={ <AddFood/>} />
          
          </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
