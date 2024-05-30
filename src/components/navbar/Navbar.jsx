import React, { useState } from 'react'
import './navbar.css'
import  SearchIcon from "../../assets/search_icon.png"
import Logo from '../../assets/logo.png'
import Bag from '../../assets/basket_icon.png'

const Navbar = () => {

  const[menu,setMenu]= useState("home");

  return (
    <div className='navbar'>
      <img src={Logo} alt=""  className="logo"/>
      <ul className="navbar-menu">
        <li className={menu==="home"?"active":""}>inicio</li>
        <li className={menu==="menu"?"active":""}>menu</li>
        <li className={menu==="app movil"?"active":""}> app movil</li>
        <li className={menu==="Contactanos"?"active":""}>contactanos</li>
      </ul>
      <div className="navbar-right">
        <img src={Bag} alt="" />
        <div className="navbar-search-icon">
          <img src={SearchIcon} alt="" />
          <div className="dot"></div>
        </div>
        <button>ingresar</button>
      </div>
    </div>
  )
}

export default Navbar
