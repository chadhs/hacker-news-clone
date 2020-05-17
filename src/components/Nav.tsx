import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const theme = 'light';
  return (
    <div className="nav-bar">
      <NavLink to="/" exact className="nav-link">
        Top{' '}
      </NavLink>
      <NavLink to="/new" exact className="nav-link">
        New{' '}
      </NavLink>
      <div className="nav-theme-toggle">{theme === 'light' ? '🔦' : '💡'}</div>
    </div>
  );
};
