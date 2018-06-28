import styled from 'styled-components'
import {colors} from './constants'

export const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  align-items: row;
  flex-grow: 1;
  background: #141414;
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

export const PageTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-family: 'Proxima Nova';
  font-size: 20pt;
  font-weight: 400;
  color: #fafafa;
`