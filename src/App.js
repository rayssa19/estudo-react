import React from 'react';
import Main from './pages/main/index'
import Header from './components/Header'
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
        <Main />
      </h1>
    </div>
  );
}

export default App;
