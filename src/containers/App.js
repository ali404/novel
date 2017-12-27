import React from 'react'
import {Route} from 'react-router'
import Menu from '../components/Menu'

import NotebooksView from './Notebooks'
import ChallengesView from './Challenges'

//import './app.style.css'

const AppView = ({children}) => (
  <div className="app">
    <Menu />
    <div className="contents">
      <Route path="/notebooks" component={NotebooksView} />
      <Route path="/challenges" component={ChallengesView} />
    </div>
  </div>
)

export default AppView
