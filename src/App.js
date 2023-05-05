import './App.css'
import React from 'react';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import Users from './screens/Users/Users';
import UsersDetails from './screens/UsersDetails/UsersDetails';
import Stories from './screens/Stories/Stories';
import ViewStories from './screens/ViewStories/MainTable';
import Notifications from './screens/Notifications/Notifications';
import ViewNotifications from './screens/ViewNotifications/MainTable';
import Channels from './screens/Channels/Channels';
import ViewChannels from './screens/ViewChannels/MainTable';
import { useContext } from 'react';
import ContextProvider , { UserContext }  from './context/UserContext';
import { useEffect } from 'react';
import { getData, StoreData } from './helper/LocalStorage';
import ROUTES from './routes';

function App() {

  // const [logged , setLogged] = React.useState(false);

  // const handleLogin = () => {
  //   setLogged(true);
  // }

  return (
    <ContextProvider>
      <AppNav />
    </ContextProvider>
  );
}

export default App;


const AppNav = () => {

  const { isLogged } = useContext(UserContext);
  // useEffect(()=>{
  //   if(isLogged){
  //     StoreData('logged','true');
  //   }
  //   else{
  //     getd();
  //   }
  // },[isLogged])
  
  // const getd = async () => {
  //   console.log(await getData('logged'));
  // }
  
  return (
    <div>
      <div className="App">
        {
          isLogged ?
            <div className="AppGlass">
              <HomeStack />
            </div>
            :
            <Login />
        }
      </div>
    </div>
  )
}

const HomeStack = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        {
          ROUTES.map((route,i) =><Route path={route.path} element={route.element} key={i} /> )
        }
        {/* <Route path='/' element={<MainDash />} />
        <Route path='/addfood' element={<AddFood />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/viewfood' element={<ViewFood />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/chat' element={<MainChat />} />
        <Route path='/viewposts' element={<ViewPost />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/orderdetails' element={<OrderDetails />} />
        <Route path='/events' element={<Events />} />
        <Route path='/viewevents' element={<ViewEvents />} />
        <Route path='/users' element={<Users />} />
        <Route path='/userdetails' element={<UsersDetails />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/viewstories' element={<ViewStories />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/viewnotifications' element={<ViewNotifications />} />
        <Route path='/channels' element={<Channels />} />
        <Route path='/viewchannels' element={<ViewChannels />} /> */}
      </Routes>
    </BrowserRouter>
  )
}