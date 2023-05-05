// import React from 'react'
// import Logo from '../../imgs/logo.png';
// import {  useNavigate } from 'react-router-dom';

// import { SidebarData } from '../../Data/Data';
// import {UilSignOutAlt} from '@iconscout/react-unicons';

// import './Sidebar.css'
// import { useState } from 'react';
// import { Button } from '@mui/material';
// import { useContext } from 'react';
// import { UserContext } from '../../context/UserContext';

// const Sidebar = () => {

//     const navigate = useNavigate()
//     const[selected, setSelected] = useState(0)

//     const handleClick = (item,i) => {
//         setSelected(i);
//         navigate(item.path)
//         console.log('Iettm  ',item)
//     }

//     const {logout} = useContext(UserContext);

//     const signOut = async () => {
//         await logout();
//         console.log('Loggd out')
//         // navigate('/login')
//     }


//   return (
//     <div className="Sidebar">
//         {/* Logo */}
//         <div className="logo">
//             <img src={Logo} alt=""/>
//             <span>Sh<span>o</span>ps</span>
//         </div>

//         {/* Menu */}
//         <div className="menu">
//             {SidebarData.map((item, index)=>{
//                 return(
//                     <div
//                     // style={({isActive})=> isActive ? 'menuItem active': 'menuItem'}}
//                  className={ index === selected ? 'menuItem active': 'menuItem'}
//                     key={index}
//                     onClick={()=>handleClick(item , index)}
//                     >

//                         <item.icon/>
//                         <span>
//                             {item.heading}
//                         </span>
//                     </div>
//                 )
//             })}

//             <div className="menuItem">
//                 <Button onClick={signOut}>
//                 <UilSignOutAlt />
//                 </Button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Sidebar

import React from 'react'
import Logo from '../../imgs/logo.png';
import { useNavigate } from 'react-router-dom';
import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import './Sidebar.css'
import { useState } from 'react';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Sidebar = () => {

  
  


  const { logout } = useContext(UserContext);

  const signOut = async () => {
    await logout();
    console.log('Logged out')
    // navigate('/login')
  }



  return (
    <div className="Sidebar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>Sh<span>o</span>ps</span>
      </div>

      {/* Menu */}
      <div className="menu">
        {SidebarData.map((item, index) => <SidebarItem item={item} key={index} index={index} />)}
        <div className="menuItem">
          <Button onClick={signOut}>
            <UilSignOutAlt />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;


const SidebarItem = ({item ,index}) => {

    const navigate = useNavigate()
    const [selected, setSelected] = useState(0);
    const [showList, setShowList] = useState(false);


  const handleClick = (item, i) => {
    setSelected(i);
    navigate(item.path)
    console.log('Item  ', item)
  }

  const renderSubMenu = (subMenu) => {
    return subMenu.map((subMenuItem, index) => {
      return (
        <div
        className={subMenuItem.path === window.location.pathname ? 'menuItem active' : 'menuItem'}
          key={index}
          onClick={() => handleClick(subMenuItem, index)}
        >
          <subMenuItem.icon />
          <span>
            {subMenuItem.heading}
          </span>
        </div>
      )
    })
  }

    if (item.subMenu) {
        return (
          <div>
            <div
              className={item.path === window.location.pathname && item.subMenu.length === 0 ? 'menuItem active' : 'menuItem'}
              onClick={() => setShowList(prev => !prev)}
            >
              <item.icon />
              <span>
                {item.heading}
              </span>
              <div className="arrow">
                {selected === index ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
              </div>
            </div>
            {
                showList &&
            <div className={selected === index ? 'subMenuContainer active' : 'subMenuContainer'}>
              {renderSubMenu(item.subMenu)}
            </div>
            }
          </div>
        )
      } else {
        return (
          <div
            
          className={item.path === window.location.pathname ? 'menuItem active' : 'menuItem'}
            key={index}
            onClick={() => handleClick(item, index)}
          >
            <item.icon />
            <span>
              {item.heading}
            </span>
          </div>
        )
      }
}