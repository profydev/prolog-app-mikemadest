import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  height: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  display: flex;
  padding: 0;
  align-items: center;
  flex: 1 0 0;
`;

const HeaderContent = styled.header`
  width: 90%;
  max-width: 1280px;
  height: 80px;
  padding: 0 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Header = ({children}) => (
  <HeaderContainer>
    <HeaderContent>{children}</HeaderContent>
  </HeaderContainer>
);
export default Header;
