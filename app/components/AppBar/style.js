import styled from 'styled-components'
import {colors} from '../../styled/constants'
import LogoSvg from './logo.svg'

export const AppBarContainer = styled.div`
  z-index: 999;
  flex: 0 0 40px;
  -webkit-app-region: drag;
  display: flex;
  align-items: row;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0px 20px 0px 80px;
  box-sizing: border-box;
  background: linear-gradient(#2D2D2D, #232323);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
`

export const Logo = styled(LogoSvg)`
  width: 20px;
  height: 20px;
  padding-left: 12px;
  align-self: center;
  border-left: 1px solid ${colors['grey']['400']};
`