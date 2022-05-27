import React from 'react';
import Pages from "./pages/Pages";
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
/* import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
//import any things for the bootstrap
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
 */
export default function App(){
  return(
      <div className="App">
        <BrowserRouter>
          <Nav>
            <GiKnifeFork />
            <Logo to={"/"}> Foodie </Logo>
          </Nav>
            <Search />
            <Category />
            <Pages />
        </BrowserRouter>
      </div>
  );
}

const Logo= styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;