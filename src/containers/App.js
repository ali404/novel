import React from 'react'
import {Route} from 'react-router'
import Menu from '../components/Menu'

import NotebooksView from './Notebooks'
import NotebookViewer from './NotebookViewer'
import ChallengesView from './Challenges'
import AddNotebook from './AddNotebook'
import AddEntry from './AddEntry'

import './app.style.css'

const AppView = ({children}) => (
  <div className="app">
    <Menu />
    <div className="contents">
      <Route exact path="/notebooks" component={NotebooksView} />
      <Route exact path="/notebooks" component={AddNotebook} />
      <Route exact path="/notebooks/:id" component={NotebookViewer} />
      <Route exact path="/notebooks/:id" component={AddEntry} />
      <Route path="/challenges" component={ChallengesView} />
    </div>
  </div>
)

export default AppView
