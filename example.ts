function addNumber(a: number, b: number) {
  return console.log(a + b);
}

addNumber(1, 2);      // 3
addNumber('x', 'y');  // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.