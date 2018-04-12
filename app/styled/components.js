import styled from 'styled-components'
import {colors} from './constants'

export const AppContainer = styled.div`
  padding: 60px 80px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${colors.white}
`

export const ContentContainer = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

export const Main = styled.div`
  max-width: 620px;
  padding-top: 30px;
  padding-left: 36px;
  padding-right: 40px;
  padding-bottom: 200px;
  overflow: auto;
`