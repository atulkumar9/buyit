import React from 'react';
import './App.css';
import StepTracker from './components/StepTracker';
import { GlobalStoreProvider } from './hooks/useGlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <StepTracker />
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
