import React from 'react'
import {Link, Route} from 'react-router-dom'
import './style.css'
import svg from '../../logo.svg'

import NotebookViewer from '../../containers/Notebooks'

const Menu = () => (
  <div className="menu">
    <img src={svg} className="menu-logo" />
    <ul>
      <li><Link to="/notebooks">Notebooks</Link></li>
      <Route path="/notebooks" component={NotebookViewer} />
      <li><Link to="/challenges">Challenges</Link></li>
    </ul>
  </div>
)

export default Menu
