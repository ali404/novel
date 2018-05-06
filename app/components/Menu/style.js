import styled from 'styled-components'
import {colors} from '../../styled/constants'

export const MenuContainer = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  width: 220px;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border-right: 1px solid ${colors.grey['300']};
`
export const MenuContent = styled.div`

`

const _MenuItem = styled.div`
  padding: 8px 20px;
  border-bottom: 1px solid ${colors.grey['300']};
`

export const MenuTabs = styled(_MenuItem)`
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MenuTab = styled.div`
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: ${props => props.active ? colors.grey["700"] : colors.grey["400"]};

  &:hover {
    cursor: pointer;
  }
`