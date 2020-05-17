import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Stories } from './Stories';
import { ThemeContext } from '../contexts/theme';
import { Nav } from './Nav';

export const App = () => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <header className="App-header">
            <h1>Hacker News Clone</h1>
          </header>
          <Nav toggleTheme={toggleTheme} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Stories storyType="top" storyCount={20} />}
            />
            <Route
              exact
              path="/top"
              render={() => <Stories storyType="top" storyCount={20} />}
            />
            <Route
              exact
              path="/new"
              render={() => <Stories storyType="new" storyCount={20} />}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
};
