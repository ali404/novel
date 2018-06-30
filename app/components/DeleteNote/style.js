import styled from 'styled-components'

export const DeleteNoteContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(14, 14, 14, 0.9);
  position: absolute;
  top: 0;
  left: 0;
`

export const DeleteNoteModal = styled.div`
  width: 200pt;
  height: 100pt;
  margin: 0 auto;
  margin-top: 200pt;
  background-color: #141414;
  padding: 20pt 40pt;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4pt;
`

export const Title = styled.div`
  font-family: 'Proxima Nova';
  font-size: 16pt;
  font-weight: 400;
  color: #fafafa;
`

export const BtnGroup = styled.div`
`

export const Button = styled.button`
  font-family: 'Proxima Nova';
  text-transform: uppercase;
  background: none;
  border: none;
  font-size: 14pt;
  font-weight: 800;
  color: ${props => props.positive ? `#fafafa` : `#D81200`};
  padding: 4pt 8pt;
  margin-right: 10pt;
  position: relative;
  bottom: 0;
  boreder-radius: 1pt;

  &:active, &:focus {
    outline: none;
  }

  &:hover {
    background-color: #080808;
    cursor: pointer;
  }
`