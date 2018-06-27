import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {TOGGLE_MENU} from '../../actions'
import {AppBarContainer, Logo} from './style'

const AppBar = ({dispatch}) => {
  return <AppBarContainer>
    {/* Here should be the os action buttons */}
    {/* <Logo onClick={ev => dispatch({type: TOGGLE_MENU})}/> */}
  </AppBarContainer>
}

const bindDispatchToProps = dispatch => ({dispatch})

export default connect(null, bindDispatchToProps)(AppBar)