import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/theme';

export const Nav = ({ toggleTheme }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="nav-bar">
      <NavLink to="/" exact className={`nav-link ${theme}`}>
        Top{' '}
      </NavLink>
      <NavLink to="/new" exact className={`nav-link ${theme}`}>
        New{' '}
      </NavLink>
      <button className="btn-clear nav-theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🔦' : '💡'}
      </button>
    </div>
  );
};
