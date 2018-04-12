import styled from 'styled-components'
import {colors} from '../../styled/constants'

export const Title = styled.p`
  font-size: 12px;
  color: ${colors.grey["600"]};
  margin: 0;
  margin-bottom: 8px;
  font-family: 'Proxima Nova';
  font-weight: 600;
`

export const DateTitle = styled.p`
  margin: 0;
  color: ${colors.grey["400"]};
  font-size: 12px;
`

export const MenuItem = styled.li`
  padding: 16px 12px;
  margin-bottom: 20px;
  border-radius: 2px;
  position: relative;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 500;
  box-shadow: rgba(133, 133, 133, 50) 0px 2px 4px 0px;
  transition: 0.1s box-shadow ease-in;

  .active & {
    background-color: ${colors.primary};

    & ${Title} {
      color: ${colors.white}
    };
    
    & ${DateTitle} {
      color: ${colors.grey["200"]};
    }
  }

  &:hover {
    box-shadow: rgba(133, 133, 133, 50) 0px 2px 14px 0px;
  }
`
