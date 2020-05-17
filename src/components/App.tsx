import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Stories } from './Stories';
import { Nav } from './Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hacker News Clone</h1>
        </header>
        <Nav />
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
    </Router>
  );
}

export default App;
