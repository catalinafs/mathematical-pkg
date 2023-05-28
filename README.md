# [Mathematical-pkg](https://www.npmjs.com/package/mathematical-pkg)

Documentation landing page: [mathematical-pkg.vercel.app](https://mathematical-pkg.org)

Mathematical-pkg is a basic math library that manage basic operations like, addition, subtraction, division, multiplication, volume, area and perimeter formulas, and the general formula.

[![Version](https://img.shields.io/npm/v/mathematical-pkg.svg)](https://www.npmjs.com/package/mathematical-pkg)

## Features

- Contains differente types of math operations.
- Runs on any JavaScript engine.
- Open source.

## Supported Operations

- Addition
- Subtraction
- Division
- Multiplication
- General Formula
- Area of a Triangle
- Area of a Square
- Cubic Volume
- Cuboid Volume
- Perimeter of a Parallelogram
- Perimeter of a Trapezoid

## Usage

Mathematical-pkg can be used in the browser.

Install mathematical-pkg using [npm](https://www.npmjs.com/package/mathematical-pkg):

    npm install mathematical-pkg

## Example of Usage

```js
import {
  sum, 
  rest, 
  divide, 
  multiply, 
  GeneralOperation, 
  triangleArea, 
  squareArea, 
  cubicVolume, 
  cuboidVolume, 
  parallelogramPerimeter, 
  trapezoidPerimeter
} from 'mathematical-pkg';

// basic operations
sum(2, 2);                       // 4
rest(5, 3);                      // 2
divide(12,2);                    // 6
multiply(4,5);                   // 20


// GeneralOperation
GeneralOperation(6,-19,7);       // [ -0.4256296675458497, -2.741036999120817 ]


// Areas
triangleArea(3, 4);              // 6
squareArea(2, 2);                // 4

// Volumes
cubicVolume(3);                  // 27
cuboidVolume(10, 4, 5);          // 220

// Perimeters 
parallelogramPerimeter(8, 7);    // 30
trapezoidPerimeter(5, 6, 5, 8);  // 24

```

## Browser support

Math.js works on any ES6 compatible JavaScript engine, Chrome, Firefox, Safari, and Edge.


## Documentation

- [Getting Started](https://mathematical-pkg.org/docs/getting_started.html)
- [Examples](https://mathematical-pkg.org/examples/index.html)
- [Overview](https://mathematical-pkg.org/docs/index.html)
- [History](https://mathematical-pkg.org/history.html)


## Build

First clone the project from github:

    git clone https://github.com/catalinafs/mathematical-pkg.git
    cd mathematical-pkg

Install the project dependencies:

    npm install or npm i

## Develop

When developing new features for mathematical-pkg, it is good to be aware of the following background information.

### Code

The code of `mathematical-pkg` is written in ES modules, and requires all files to have a real, relative path, meaning the files must have a `*.js` extension. Please configure adding file extensions on auto import in your IDE.

## Test

To execute tests for the library, install the project dependencies once:

    npm install

Then, the tests can be executed:

    npm test

Have some fun with the package!!!