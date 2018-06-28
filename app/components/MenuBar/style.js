import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const MenuContainer = styled.div`
  display: flex;
  width: 60px;
  background-color: #141414;
`

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  margin-top: 10px;
`

export const MenuListItem = styled.li`
  margin: 10px 0;

  & .active svg {
    color: #fafafa;
  }
`

export const MenuItem = styled(NavLink)`
  & svg {
    font-size: 26px;
    color: #2d2d2d
  }
`