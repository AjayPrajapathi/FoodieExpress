import React from 'react'
import  './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
      <NavLink to='/orders' className="sidebar-option">
            {/* <img src={assets.order_icon} alt="" /> */}
            <p>Orders</p>
        </NavLink>
        <NavLink to='/add' className="sidebar-option">
            {/* <img src={assets.add_icon} alt="" /> */}

            <FontAwesomeIcon icon={'face-smile-plus'}/>
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            {/* <img src={assets.order_icon} alt="" /> */}
            <p>List Items</p>
        </NavLink>
       
      </div>
    </div>
  )
}

export default Sidebar
