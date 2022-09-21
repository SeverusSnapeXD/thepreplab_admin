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
import OrderDetails from './screens/OrderDetails/OrderDetails';
import Events from './screens/Events/Events';
import ViewEvents from './screens/ViewEvents/MainTable';
function App() {

  const [logged , setLogged] = React.useState(false);

  const handleLogin = () => {
    setLogged(true);
  }

  return (
    <div className="App">
      {/* {
            logged ? */}
        <div className="AppGlass">
          <HomeStack /> 
        </div>
      {/* //   :
      //   <Login onPress={handleLogin} />
      // } */}
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
            <Route path='/orderdetails' element={<OrderDetails/>} />
            <Route path='/events' element={<Events/>} />
            <Route path='viewevents' element={<ViewEvents/>} />
          </Routes>
          </BrowserRouter>
  )
}