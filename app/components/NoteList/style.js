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
  font-family: 'Playfair Display', sans-serif;
  font-weight: 500;
  text-decoration: none;

  .active & {
    background-color: var(--blue);
  }

  .active &:hover {
    background-color: var(--blue-transparent);
  }

  &:hover {
    background-color: var(--grey-100);
  }
`

export const NotesMenu = styled.ul`
  position: fixed;
  left: 80px;
  overflow-y: scroll;
  list-style: none;
  width: 200px;
  padding: 0;
  margin: 0;
  border-right: 1px solid var(--grey-200);
  height: 100%;
`
