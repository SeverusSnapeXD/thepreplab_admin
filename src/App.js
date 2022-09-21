import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter,Route , Routes } from 'react-router-dom'
import AddFood from './screens/AddFood/AddFood';
import Explore from './screens/Explore/Explore';
import ViewFood from './screens/ViewFood/ViewFood';
import Posts from './screens/Posts/Posts';
import MainChat from './screens/Chat/MainChat';
import ViewPost from './screens/ViewPost/MainTable';
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
            <Route path='/posts' element={<Posts/>} />
            <Route path='/chat' element={<MainChat/>} />
            <Route path='/viewposts' element={ <ViewPost/>} />

          </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
