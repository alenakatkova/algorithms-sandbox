import React from 'react';
import logo from './logo.svg';
import './App.css';

const merge = (arr) => {
  let result = [];
  let pointer0 = 0;
  let pointer1 = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {
    if (pointer1 === arr.length ||
        ((pointer0 < arr.length / 2) && (arr[pointer0] < arr[pointer1]))) {
      result[i] = arr[pointer0];
      pointer0++;
    } else {
      result[i] = arr[pointer1];
      pointer1++;
    }
  }

  console.log(result);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
