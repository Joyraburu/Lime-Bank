import React from 'react'
import {NavLink} from 'react-router-dom'
/*import AboutUs from '../pages/aboutus';
import Home from '../pages/home'
import AddAccount from '../microservice/addaccount';
import CreateCustomer from '../microservice/createcustomer';*/

const Header =() => {
  return (
    <div>
      <NavLink to = '/' activeclassname = 'is-active' id='header' exact ="true" >Home</NavLink>
      <NavLink to = '/AboutUs' activeclassname= 'is-active' id='header'> About us</NavLink>
      <NavLink to = '/Services' activeclassname= 'is-active' id='header'>Services</NavLink>
      <NavLink to = '/AddAccount' activeclassname= 'is-active' id='header'> Add account</NavLink>
      <NavLink to = '/CreateCustomer' activeclassname= 'is-active' id='header'> Sign up</NavLink>
    </div>
  )
}

export default Header;