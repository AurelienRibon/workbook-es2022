// @id pOfJzOEgNmPvs5ZghElRBU
// ES2022 class-properties
// Properties can be added to class body, without using constructor.

class C1 {
  foo = 1;
  static bar = 10;
}

new C1().foo + C1.bar;

// @id EuHuf0JOpX8c4t85g8Vu9M
// ES2022 class-static-block
// Initialization of static properties can be done in a dedicated block.

class C2 {
  static bar;

  static {
    this.bar = 1;
  }
}

C2.bar

// @id u1z18rX4Kk67UGBbb0cxJc
// ES2021 numeric-separator
// Allows presence of underscores in number literals.

1_000_000

// @id ZRzfL7rSHpl5vw71hEgWxQ
0b1011_0101_1011

// @id Ten40rYPIfGFbdVUe8QaN5
// ES2021 logical-assignment-operators
// Adds operators `||=` and `&&=`

let a = false;
a ||= true; // shorthand for `a = a || true;`
a;

// @id yjnZH5ZO51mRPklbQvIhSu
let a = false;
a &&= true; // shorthand for `a = a && true;`
a;

// @id t2ulOvkQGncFtwnQV5ApmF
// ES2020 syntax-bigint
// Suffix `n` to a number to declare it as a BigInt

123456789123456789n

// @id iLXpwyVo6dqBskrwQublyZ
// ES2020 optional-chaining
// Use `?.` to access a member property, result will be undefined if parent does not exist.

let a = null;
a?.b   // static property access

// @id TM2gpRzkjW1z8tBZ92i8db
let a = null;
a?.[0] // dynamic property access

// @id tksmExm0laJv69lXGTWNJc
let a = null;
a?.()  // function call

// @id hH7G3V0vAxPaoWlG5UdmJX
// ES2020 nullish-coalescing-operator
// Operator `??` returns left operand if not null or undefined, or returns right operand.

let a = null;
a ?? 1;

// @id kJ9vJoPzKjr1Ah1stdHWBw
// ES2019 optional-catch-binding
// No need to declare a variable in `catch (err)` if you do not use it.

try {
  BOOM;
} catch {
  return 1;
}

// @id cmnnvEhCcQJ7pw3B7K2wm8
// ES2018 object-rest-spread
// Use spread operator `...` to coerce all remaining object properties into a dedicated object.

const { x, ...others } = { x: 1, y: 2, z: 3 };
others;

// @id HIKSMLravqnKHzY1N78Mt1
// ES2018 async-generator-functions
// Asynchronous generator functions, to be used with `for await` syntax.

async function* myAsyncGenerator() {
  yield 1;
  await 2;
  yield 3;
}

const values = [];
for await (const x of myAsyncGenerator()) {
  values.push(x);
}
values;