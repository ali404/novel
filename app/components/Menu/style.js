import styled from 'styled-components'
import {colors} from '../../styled/constants'

export const MenuContainer = styled.div`
  display: block;
  width: 280px;
  padding: 40px 0;
`
export const MenuContent = styled.div`

`

export const MenuTabs = styled.div`
  padding: 8px 12px;
  border-bottom: 2px solid ${colors.grey["300"]};
  margin: 0 28px 16px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const MenuTab = styled.div`
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.active ? colors.grey["700"] : colors.grey["400"]};

  &:hover {
    cursor: pointer;
  }
`