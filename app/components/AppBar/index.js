import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'

import {AppBarContainer, Logo} from './style'

const AppBar = ({actions}) => {
  return <AppBarContainer>
    {/* Here should be the os action buttons */}
    <Logo onClick={actions.toggleMenu}/>
  </AppBarContainer>
}

const bindStateToProps = state => ({})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch) 
})

export default connect(null, bindDispatchToProps)(AppBar)