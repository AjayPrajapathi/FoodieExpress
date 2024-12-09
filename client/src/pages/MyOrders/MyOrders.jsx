import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShippingFast } from '@fortawesome/free-solid-svg-icons';

 const MyOrders = () => {
  
  const [data,setData] =  useState([]);
  const {url,token,currency} = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data)
  }

  useEffect(()=>{
    if (token) {
      fetchOrders();
    }
  },[token])
if(data.length<1){
  return (<div className='no-delivery'>
    <h1>My orders</h1>
    <br/>
    <h3>No order placed yet</h3>
    <p>place a order and get speedy delvery</p>
    <p>You can enjoy Your Favourote food here with no delay </p>
    <p>We belive in Quality.To deliver best test to our customer</p>

  </div>)
}
  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order,index)=>{
          return (
            <div key={index} className='my-orders-order'>
                {/* <img src={assets.parcel_icon} alt="" /> */}
                <FontAwesomeIcon style={{fontSize:"50px",color:"lightGreen"}} icon={faShippingFast}/>
                <p>{order.items.map((item,index)=>{
                  if (index === order.items.length-1) {
                    return item.name+" x "+item.quantity
                  }
                  else{
                    return item.name+" x "+item.quantity+", "
                  }
                  
                })}</p>
                <p>{currency}{order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
