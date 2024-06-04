<div align="center">

**[Matician](https://kevindmorris.github.io/matician/): (/məˈtiSH(ə)n/) Shorthand for a specialist or expert in mathematics.**

<p>
A modern JavaScript utility library for arithmetic, mathematics, proability, statistics, and more.
</p>

<div>

[![npm version](https://img.shields.io/npm/v/matician.svg?label=version)](https://www.npmjs.com/package/matician)
[![npm downloads](https://img.shields.io/npm/dm/matician.svg)](https://www.npmjs.com/package/matician)
[![package license](https://img.shields.io/npm/l/matician.svg)](https://www.npmjs.com/package/matician)

</div>

<b>

📋[Docs](https://kevindmorris.github.io/matician/) | 🧪[GitHub](https://github.com/kevindmorris/matician) | 📦[Package](https://www.npmjs.com/package/matician)

</b>

</div>

# Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Run the Test Suite](#run-the-test-suite)
- [Why Matician?](#why-matician)
- [Contributors](#contributors)
- [Author](#author)

# Getting Started

Use your preferred package manager:

```
npm install matician
yarn add matician
```

# Usage

With CommonJS,

```js
const { add } = require("matician");

const sum = add(1, 2);

console.log(sum);
// => 3
```

With ES modules,

```js
import { add } from "matician";

const sum = add(1, 2);

console.log(sum);
// => 3
```

# Run the Test Suite

```bash
git clone https://github.com/kevindmorris/matician.git
npm install
npm test # Run the entire test suite
npm test -- add.test.ts # Run an individual test suite
```

# Why Matician?

Matician takes the hassle out of writing custom JavaScript functions for mathematical, statistical, and probabilistic methods.

# Contributors

Open an [issue](https://github.com/kevindmorris/matician/issues) to address bugs or suggest new modules!

# Author

Kevin Morris
