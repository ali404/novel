import styled from 'styled-components'
import {colors} from '../../styled/constants'

export const Title = styled.p`
  font-size: 12pt;
  color: #505050;
  margin: 0;
  margin-bottom: 4px;
  font-family: 'Proxima Nova';
  font-weight: 400;
  letter-spacing: 0.1px;
`

export const DateTitle = styled.p`
  margin: 0;
  color: #3C3C3C;
  font-size: 10pt;
  margin-bottom: 28pt;
  letter-spacing: 0.1px;
`

export const MenuItem = styled.li`
  padding: 0;
  font-family: 'Proxima Nova';
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
