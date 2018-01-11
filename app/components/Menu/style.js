import styled from 'styled-components'

export const Separator = styled.div`
  content: ' ';
  display: table;
  height: 60px;
`

export const MenuStyle = styled.div`
  height: 100vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--white);
  border-right: 1px solid var(--grey-200);
  color: var(--grey-50);
  padding: 40px 0 20px 0;
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
  display: block;
  padding: 16px;
  position: relative;
  transition: 0.1s all ease-in;

  & svg {
    font-size: 28px;
    color: var(--grey-800);
    transition: 0.1s all ease-in;
    display: block;
    margin: 0 auto;
  }

  &:hover {
    background-color: var(--blue);
    cursor: pointer;

    & svg {
      color: var(--white);
    }
  }

  .active & {
    background-color: var(--blue);
    color: var(--white);

    &:hover {
      background-color: var(--blue-transparent);
    }
  }
`

export const MenuActionableItem = styled.li`
  display: block;
  padding: 16px;
  position: relative;
  transition: 0.1s all ease-in;

  & svg {
    border-radius: 20px;
    padding: 4px;
    font-size: 28px;
    display: block;
    margin: 0 auto;
    color: var(--grey-800);
    transition: 0.1s all ease-in;
  }

  & svg:hover {
    cursor: pointer;
  }

  & svg:hover {
    background-color: var(--blue);
    color: var(--white);
  }
`

export const MenuActionableItems = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  align-self: flex-end;
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
