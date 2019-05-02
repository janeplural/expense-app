import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Expense App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink>
    <NavLink to="/create" activeClassName="is-active">create</NavLink>
    <NavLink to="/help" activeClassName="is-active">help</NavLink>
  </header>

);

export default Header;