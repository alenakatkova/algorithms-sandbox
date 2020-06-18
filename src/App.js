import React from 'react';
import logo from './logo.svg';
import './App.css';

let result = [];

const merge = (arr) => {
  let pointer0 = 0;
  let pointer1 = 0;

  for (let i = 0; i < arr[0].length + arr[1].length; i++) {
    if (pointer0 === arr[0].length) {
      result[i] = arr[1][pointer1];
      pointer1++;
    } else if (pointer1 === arr[1].length) {
      result[i] = arr[0][pointer0];
      pointer0++;
    } else if (arr[0][pointer0] < arr[1][pointer1]) {
      result[i] = arr[0][pointer0];
      pointer0++;
    } else {
      result[i] = arr[1][pointer1];
      pointer1++;
    }
  }

  console.log(result);
};

function App() {
  merge([[2, 5, 7, 8], [1,5,5,336]]);
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
