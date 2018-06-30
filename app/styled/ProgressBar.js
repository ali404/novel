import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Progress = styled.div`
  box-shadow: none;
  position: relative;
  display: block;
  width: 100%;
  height: 6pt;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: #2d2d2d;
  border-radius: 2pt;
`

const Bar = styled.div`
  box-shadow: none;
  height: 6pt;
  background-color: #fafafa;
  width: 0%;
  transition: ${props => `width ${props.delay / 1000}s`};
  transition-timing-function: cubic-bezier(.33,.16,.67,.14);
`

export default class ProgressBar extends React.Component {
  static propTypes = {
    delay: PropTypes.number.isRequired
  }

  state = {
    animate: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({animate: true})
    }, 0)
  }

  render() {
    return <Progress>
      <Bar delay={this.props.delay} style={{width: this.state.animate ? '100%' : '0%'}} />
    </Progress>
  }
}