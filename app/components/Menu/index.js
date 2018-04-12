import React, {Component} from 'react'

import NotesMenu from '../NotesMenu'
import NotebookList from '../NotebookList'
import withResource from '../../hocs/withResource'

import {MenuContainer, MenuContent, MenuTabs, MenuTab} from './style'

export default class Menu extends Component {
  state = {
    notesTab: true
  }

  render() {
    return <MenuContainer>
      <MenuTabs>
        <MenuTab 
          onClick={ev => {
            this.setState({notesTab: true})
          }} 
          active={this.state.notesTab}
        >
          Notes
        </MenuTab>
        <MenuTab
          onClick={ev => {
            this.setState({notesTab: false})
          }}
          active={!this.state.notesTab}
        >
          Notebooks
        </MenuTab>
      </MenuTabs>
      <MenuContent>
        {this.state.notesTab ? (
          <NotesMenu />
        ) : (
          <NotebookList />
        )}
      </MenuContent>
    </MenuContainer>
  }
}