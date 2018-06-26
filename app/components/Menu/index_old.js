import React, {Component} from 'react'

import NotesMenu from '../NotesMenu'
import NotebookSwitch from '../NotebookSwitch'
import NotebookList from '../NotebookList'
import withResource from '../../hocs/withResource'

import {MenuContainer, MenuContent, MenuTabs, MenuTab} from './style'
import {connect} from 'react-redux'

class Menu extends Component {
  state = {
    notesTab: true
  }

  render() {
    return <MenuContainer active={this.props.settings.menu.open}>
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
          <div>
            <NotebookSwitch />
            <NotesMenu />
          </div>
        ) : (
          <NotebookList />
        )}
      </MenuContent>
    </MenuContainer>
  }
}

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps, null, null, {
  pure: false
})(Menu)