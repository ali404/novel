import styled from 'styled-components'

export const Notebook = styled.div`
  font-family: 'Proxima Nova';
  font-size: 20pt;
  font-weight: 100;
  letter-spacing: 0.2px;
  color: #FAFAFA;
  margin-bottom: 36pt;
`

export const NotebookSelect = styled.select`
  font-size: 20pt;
  background-color: transparent;
  color: #fafafa;
  font-family: 'Proxima Nova';
  font-weight: 100;
  border: none;
  padding: 0;
  margin-bottom: 36pt;
  overflow: hidden;

  -webkit-appearance: none;
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;


  &:focus, &:active {
    outline: none;
  }
`

export const NotebookOption = styled.option``