import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
`

export const MenuItem = styled(Link)`
  &.active svg {
    color: #fafafa;
  }

  & svg {
    font-size: 30px;
    color: #2d2d2d
  }
`