import React from 'react';
import PlaceholderComponent from './components/PlaceholderComponent';
import { placeholderService } from './services/placeholderService';

function App() {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <p>Service says: {placeholderService()}</p>
      <PlaceholderComponent />
    </div>
  );
}

export default App;
