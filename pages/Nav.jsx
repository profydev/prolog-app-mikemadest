import styled from 'styled-components';
import {Routes} from '@config/routes';

const NavContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    & li {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
  }

  & a {
    font-size: 16px;
    font-weight: bold;
    color: #667085;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  & li + li {
    margin-left: 32px;
  }
`;

const Nav = () => (
  <NavContainer>
    <ul>
      <li>
        <a href={Routes.home}>Home</a>
      </li>
      <li>
        <a href={Routes.products}>Products</a>
      </li>
      <li>
        <a href={Routes.documentation}>Documentation</a>
      </li>
      <li>
        <a href={Routes.pricing}>Pricing</a>
      </li>
    </ul>
  </NavContainer>
);

export default Nav;
