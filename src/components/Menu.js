import React from 'react'
import {Link} from 'react-router-dom'
//import './style.css'

const Menu = () => (
  <div className="menu">
    <ul>
      <li><Link to="/notebooks">Notebooks</Link></li>
      <li><Link to="/challenges">Challenges</Link></li>
      <li><Link to="/account">Account</Link></li>
      <li><Link to="/app">App settings</Link></li>
    </ul>
  </div>
)

export default Menu
