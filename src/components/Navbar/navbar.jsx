import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'

const navbar = () => {
const [menu,setMenu] =useState("Menu")

return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
    <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-us</li>
    </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt=""/>
            <div className="dot"></div>
        </div>
        <button>Sign In</button>
    </div>
    </div>
)
}

export default navbar
