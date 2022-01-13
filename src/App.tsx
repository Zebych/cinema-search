import React, { ReactElement } from 'react';

import './App.css';
import { SearchFilms } from './userInterface/SearchFilms';

const App = (): ReactElement => (
  <div className="App">
    <SearchFilms />
  </div>
);

export default App;
