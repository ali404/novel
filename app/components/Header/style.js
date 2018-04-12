import styled from 'styled-components'
import LogoSvg from './logo.svg'
import {colors} from '../../styled/constants'

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  padding: 0 28px;
  justify-content: flex-start;
`

export const Logo = styled(LogoSvg)`
  align-self: center;
  width: 28px;
  height: 28px;
`

export const Line = styled.div`
  height: 2px;
  content: ' ';
  display: block;
  width: 80%;
  background-color: ${colors.grey["300"]};
  align-self: center;
  margin-left: 28px;
`

export const Icons = styled.div`

`