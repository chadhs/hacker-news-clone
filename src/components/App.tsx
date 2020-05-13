import React from 'react';
import { Stories } from './Stories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker News Clone</h1>
      </header>
      <Stories storyType="top" storyCount={20} />
    </div>
  );
}

export default App;
