import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Stories } from './Stories';
import { Comments } from './Comments';
import { ThemeContext } from '../contexts/theme';
import { Nav } from './Nav';

export const App = () => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <div className={theme}>
          <div className="App">
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
              <Route path="/post" component={Comments} />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
};
