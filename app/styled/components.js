import styled from 'styled-components'
import {colors} from './constants'

export const AppContainer = styled.div`
  padding: 0;
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  height: 100vh;
  align-items: row;
  margin-top: 40px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  box-shadow: -1px 0 1px 0 rgba(0, 0, 0, 0.5);
  background-color: #141414;
`

export const Main = styled.div`
  max-width: 620px;
  padding-top: 30px;
  padding-left: 36px;
  padding-right: 40px;
  padding-bottom: 200px;
  overflow: auto;
`