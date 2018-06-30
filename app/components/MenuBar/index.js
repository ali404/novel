import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {MenuContainer, MenuList, MenuListItem, MenuItem} from './style'
import {MdEdit, MdFolderOpen, MdWhatshot, MdSettings} from 'react-icons/lib/md'

class MenuBar extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }
  
  shouldComponentUpdate(newProps) {
    const a = this.props.location.pathname.split('/')
    const b = newProps.location.pathname.split('/')
    const route = a[1]
    const newRoute = b[1]
    
    return route !== newRoute
  }

  render() {
    return <MenuContainer>
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

export default withRouter(MenuBar)