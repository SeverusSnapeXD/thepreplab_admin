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

  const [logged , setLogged] = React.useState(false);

  const handleLogin = () => {
    setLogged(true);
  }

  return (
    <div className="App">
        <div className="AppGlass">
          {
            logged ?
            <HomeStack /> :
            <Login onPress={handleLogin} /> 
          }
        </div>
    </div>
  );
}

export default App;

const HomeStack = () => {
  return(
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
  )
}