import styled from 'styled-components'

export const Title = styled.p`
  font-size: 16px;
  color: var(--grey-800);
  margin: 0;
  margin-bottom: 8px;
`

export const DateTitle = styled.p`
  margin: 0;
  color: var(--grey-500);
`

export const MenuItem = styled.li`
  border-bottom: 1px solid var(--grey-300);
  color: black;
  padding: 16px;
  position: relative;
  font-family: 'Proxima Nova', sans-serif;
  letter-spacing: -0.2px;
  font-weight: 500;

  .active & {
    background-color: var(--blue);

    & ${Title}, & ${DateTitle} {
      color: var(--white);
    }
  }

  .active &:hover {
    background-color: var(--blue-transparent);
  }

  &:hover {
    background-color: var(--grey-100);
  }
`
