import './App.css'
import React from 'react';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter,Route , Routes } from 'react-router-dom'
import AddFood from './screens/AddFood/AddFood';
import Explore from './screens/Explore/Explore';
import ViewFood from './screens/ViewFood/ViewFood';
import Posts from './screens/Posts/Posts';
import MainChat from './screens/Chat/MainChat';
import ViewPost from './screens/ViewPost/MainTable';
import Login from './components/Login/Login';
import Order from './screens/Order/Order';
function App() {

  const [logstate,setLogstate] = React.useState(false);
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes> */}
      {/* {logstate?<MainDash chstate={logstate => setLogstate(logstate)}/>:<Login changeState={logstate => setLogstate(logstate)}/>} */}
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
            <Route path='/orders' element={<Order/>} />
          </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
