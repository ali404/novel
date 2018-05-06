import styled from 'styled-components'
import {colors} from '../../styled/constants'
import LogoSvg from '../Header/logo.svg'

export const AppBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  -webkit-app-region: drag;
  display: flex;
  align-items: row;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  padding: 0px 20px 0px 80px;
  box-sizing: border-box;
  background-color: ${colors['grey']['200']};
  border-bottom: 1px solid ${colors['grey']['300']};
`

export const Logo = styled(LogoSvg)`
  width: 20px;
  height: 20px;
  padding-left: 12px;
  align-self: center;
  border-left: 1px solid ${colors['grey']['400']};
`