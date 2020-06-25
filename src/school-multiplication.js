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