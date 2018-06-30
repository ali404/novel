import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'

import ProgressBar from '../styled/ProgressBar'

const LoadingStateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400pt;
  margin: 0 auto;
  margin-top: 20vh;
`

const LoadingStateTitle = styled.div`
  font-family: 'Proxima Nova';
  font-weight: 800;
  font-size: 32pt;
  margin-bottom: 20pt;
  color: #fafafa;
`

class LoadingState extends React.Component {
  static propTypes = {
    delay: PropTypes.number.isRequired
  }
  
  state = {
    progress: 0
  }

  componenWillMount() {
    // set the timer
  }

  componentWillUnmount() {
    // delete the timer
  }

  render() {
    return <LoadingStateContainer>
      <LoadingStateTitle>Novel</LoadingStateTitle>
      <ProgressBar delay={1500} />
    </LoadingStateContainer>
  }
}

const bindStateToProps = state => ({
  globals: state.globals
})

export default connect(bindStateToProps)(LoadingState)