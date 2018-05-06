import React from 'react'
import {Route, withRouter, Switch} from 'react-router'

import Header from '../components/Header'
import Menu from '../components/Menu'
import EntryView from './EntryView'
import AppBar from '../components/AppBar'

import {AppContainer, ContentContainer, Main} from '../styled/components'

const AppView = ({match}) => (
  <AppContainer>
    <AppBar />
    <ContentContainer>
      <Menu />
      <Main>
        {/* <Route exact path="/notes/:id" component={InfoView} /> */}
        <Route exact path="/notes/:id" component={EntryView} />
      </Main>
    </ContentContainer>
  </AppContainer>
)

export default AppView
