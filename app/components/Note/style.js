import styled from 'styled-components'

export const Info = styled.div`
  position: fixed;
  width: 280px;
  height: 100%;
  ${'' /* background-color: var(--grey-900); */}
  background-color: rgba(9, 18, 23, 1);
  right: 0;
  top: 0;
  padding: 60px 20px 28px;
`

export const Title = styled.h2`
  font-size: 28px;
  font-family: 'Proxima Nova';
  padding: 0;
  margin: 0;
  color: var(--grey-500);
`

export const ActionableIcon = styled.div`
  position: absolute;
  bottom: 110px;
  right: 20px;
  padding: 4px;
  border-radius: 2px;

  &:hover {
    background-color: var(--grey-800);
    cursor: pointer;

    & svg {
      color: var(--red);
    }
  }

  & svg {
    color: var(--grey-500);
    font-size: 30px;

  }
`
