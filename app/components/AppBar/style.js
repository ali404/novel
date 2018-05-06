import styled from 'styled-components'
import {colors} from '../../styled/constants'
export const AppBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  -webkit-app-region: drag;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background-color: ${colors['grey']['200']};
  border-bottom: 1px solid ${colors['grey']['300']};
`