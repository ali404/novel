import React from 'react'
import {Route, withRouter, Switch} from 'react-router'

import Header from '../components/Header'
import Menu from '../components/Menu'
import EntryView from './EntryView'

import {AppContainer, ContentContainer, Main} from '../styled/components'

const AppView = ({match}) => (
  <AppContainer>
    <Header />
    <ContentContainer>
      <Menu />
      <Main>
        {/* <Route exact path="/notes/:id" component={InfoView} /> */}
        <Route exact path="/notes/:id" component={EntryView} />
      </Main>
    </ContentContainer>
  </AppContainer>
)

export default withRouter(AppView)
