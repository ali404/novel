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
  padding: 8px 16px;
  border-bottom: 1px solid ${colors.grey['200']};
  position: relative;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 500;
  transition: 0.1s box-shadow ease-in;

  .active & {
    background-color: ${colors.grey['200']};

    & ${Title} {
      color: ${colors.grey['800']}
    };
    
    & ${DateTitle} {
      color: ${colors.grey["600"]};
    }
  }

  &:hover {
    background-color: ${colors.grey['200']};
  }
`
