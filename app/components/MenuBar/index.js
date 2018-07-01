import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {MenuContainer, MenuList, MenuListItem, MenuItem} from './style'
import {MdEdit, MdFolderOpen, MdWhatshot, MdSettings} from 'react-icons/lib/md'

import * as actions from '../../actions'
import mousetrap from 'mousetrap'

class MenuBar extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    mousetrap.bind('command+shift+n', () => {
      this.props.actions.toggleMenu()
    })
  }

  componentWillUnmount() {
    mousetrap.unbind('command+shift+n')
  }
  
  shouldComponentUpdate(newProps) {
    const a = this.props.location.pathname.split('/')
    const b = newProps.location.pathname.split('/')
    const route = a[1]
    const newRoute = b[1]
    const lastOpen = this.props.settings.menu.open
    const newOpen = newProps.settings.menu.open
    
    if(route !== newRoute) return true
    if(lastOpen !== newOpen) return true

    return false
  }

  render() {
    console.log(this.props.settings.menu.open)
    return <MenuContainer open={this.props.settings.menu.open}>
      <MenuList>
        <MenuListItem>
          <MenuItem to="/notes" activeClassName="active">
            <MdEdit />
          </MenuItem>
        </MenuListItem>
        <MenuListItem>
          <MenuItem to="/notebooks" activeClassName="active">
            <MdFolderOpen />
          </MenuItem>
        </MenuListItem>
        <MenuListItem>
          <MenuItem to="/challenges" activeClassName="active">
            <MdWhatshot />
          </MenuItem>
        </MenuListItem>
        <MenuListItem>
          <MenuItem to="/settings" activeClassName="active">
            <MdSettings />
          </MenuItem>
        </MenuListItem>
      </MenuList>
    </MenuContainer>
  }
}

const bindStateToProps = state => ({
  settings: state.settings
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(
  bindStateToProps, 
  bindDispatchToProps
)(MenuBar))