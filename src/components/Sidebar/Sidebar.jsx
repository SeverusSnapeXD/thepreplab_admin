import React from 'react'
import Logo from '../../imgs/logo.png';
import {  useNavigate } from 'react-router-dom';

import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';

import './Sidebar.css'
import { useState } from 'react';

const Sidebar = () => {

    const navigate = useNavigate()
    const[selected, setSelected] = useState(0)

    const handleClick = (item,i) => {
        setSelected(i);
        navigate(item.path)
        console.log('Iettm  ',item)
    }


  return (
    <div className="Sidebar">
        {/* Logo */}
        <div className="logo">
            <img src={Logo} alt=""/>
            <span>Sh<span>o</span>ps</span>
        </div>

        {/* Menu */}
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div
                    // style={({isActive})=> isActive ? 'menuItem active': 'menuItem'}}
                 className={ index === selected ? 'menuItem active': 'menuItem'}
                    key={index}
                    onClick={()=>handleClick(item , index)}
                    >

                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar