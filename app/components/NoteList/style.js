import styled from 'styled-components'
import {colors} from '../../styled/constants'

export const Title = styled.p`
  font-size: 16px;
  color: #505050;
  margin: 0;
  font-family: 'Proxima Nova';
  font-weight: 400;
`

export const DateTitle = styled.p`
  margin: 0;
  color: #3C3C3C;
  font-size: 14px;
  margin-bottom: 30px;
`

export const MenuItem = styled.li`
  padding: 0;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 400;
  transition: 0.1s box-shadow ease-in;

  .active & {

    & ${Title} {
      color: #FAFAFA;
    };
    
    & ${DateTitle} {
      color: #787878;
    }
  }
`
