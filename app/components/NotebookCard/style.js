import styled from 'styled-components'

export const NotebookCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12pt 14pt;
  border: 1pt solid #2d2d2d;
  border-radius: 1pt;
  min-width: ${props => props.large ? '180pt' : '80pt'};
  margin-right: 20pt;
  margin-bottom: 20pt;
`

export const NotebookCardTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-family: 'Proxima Nova';
  font-weight: 400;
  font-size: 16pt;
  color: #fafafa;
`

export const NotebookCardDate = styled.p`
  padding: 0;
  margin: 0;
  font-family: 'Proxima Nova';
  font-weight: 400;
  font-size: 12pt;
  color: #787878;
`

export const NotebookCardCount = styled.p`
  position: absolute;
  top: 8pt;
  right: 8pt;
  margin: 0;
  font-family: 'Proxima Nova';
  font-weight: 400;
  font-size: 14pt;
  color: #fff;
`

export const NotebookCardAddBtn = styled(NotebookCardCount)`
  &:hover {
    cursor: pointer
  }

  & svg {
    font-size: 14pt;
  }
`

export const NotebookCardInputTitle = styled.input`
  background: transparent;
  border: none;
  font-family: 'Proxima Nova';
  font-size: 16pt;
  font-weight: 400;
  color: #fafafa;
  padding: 0;
  margin: 0;

  
  &:active, &:focus {
    outline: none;
  }
`