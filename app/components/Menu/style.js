import styled from 'styled-components'

export const Separator = styled.div`
  content: ' ';
  display: table;
  height: 60px;
`

export const MenuStyle = styled.div`
  height: 100%;
  width: 80px;
  position: fixed;
  overflow-y: scroll;
  background-color: '#fff';
  border-right: 1px solid var(--grey-200);
  color: var(--grey-50);
  padding: 60px 0;
  box-sizing: border-box;
`

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
  /*border-bottom: 1px solid var(--grey-300);*/
  color: black;
  padding: 16px;
  position: relative;
  transition: 0.1s all ease-in;

  & svg {
    font-size: 28px;
    color: var(--grey-700);
    transition: 0.1s all ease-in;
  }

  &:hover {
    background-color: var(--blue);
    cursor: pointer;

    & svg {
      color: var(--white);
    }
  }
`

export const SvgLogoLine = styled.path.attrs({
  d: props => props.d,
  transform: props => props.transform
})`
  fill: ${props => props.fill}
`

export const SvgLogo = styled.svg.attrs({
  id: 'Layer_1',
  'data-name': 'Layer_1',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 25.41 26.76',
})`
  width: 36px;
  padding-right: 22px;
  padding-left: 22px;
  padding-bottom: 20px;
  display: block;
  padding-top: 20px;

  &:hover {
    background-color: var(--blue);
    cursor: pointer;
  }

  &:hover ${SvgLogoLine} {
    fill: ${props => props.fillHover}
  }
`
