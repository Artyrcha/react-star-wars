import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">Star Wars</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/planet">Planets</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;