import React from 'react';
import logo from './logo.svg';
import './App.css';

const multiply = (num1, num2) => {
  console.log("le: ", num1.length, num2.length);
  let lines = [];
  let current = [];
  let carry = [];
  let product = 0;
  for (let i = 0; i < num2.length; i++) {
    for (let k = 0; k < num1.length; k++) {
      product = num1[num1.length - k - 1] * num2[num2.length - i - 1] + carry;
      current.unshift(product % 10);
      carry = Math.floor(product / 10);
    }
    if(carry > 0) {
      current.unshift((carry));
    }
    for (let j = 0; j < i; j++) {
      current.push(0);
    }
    lines.unshift(current);
    carry=0;
    current = [];
  }
console.log(lines);
  let l = 0;
  for (let lengths = 0; lengths < lines.length; lengths++) {

    l = l < lines[lengths].length ? lines[lengths].length : l;
  }

  let curr = 0;
  let s = [];
  let carr = 0;
  let fff = 0;

  for (let q = 1; q <= l; q++) {
    for (let h = 1; h <= lines.length; h++) {
      if (lines[lines.length - h][lines[lines.length - h].length - q]) {
        curr += lines[lines.length - h][lines[lines.length - h].length - q];
      }
    }
    fff = curr + carr;
    s.unshift(fff % 10);
    carr = Math.floor(fff / 10);

    curr = 0;
  }

  console.log(s.join(""));
};

function App() {
  multiply([3,1,4,1,5,9],[3,1,4,1,5,9]);


  multiply([3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2], [2,7,1,8,2,8,1,8,2,8,4,5,9,0,4,5,2,3,5,3,6,0,2,8,7,4,7,1,3,5,2,6,6,2,4,9,7,7,5,7,2,4,7,0,9,3,6,9,9,9,5,9,5,7,4,9,6,6,9,6,7,6,2,7]);
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
