---
# 📘 JavaScript & Node.js Basics

A beginner-friendly overview of essential JavaScript and Node.js concepts.
---

## 📦 `package.json` (Node Projects)

Describes your project's metadata and dependencies.

| Field              | Description                                        |
| ------------------ | -------------------------------------------------- |
| `name`             | Name of the package                                |
| `version`          | Package version (major.minor.patch)                |
| `description`      | Short summary of the project                       |
| `keywords`         | Help others find your package on npm               |
| `author`           | Project creator(s)                                 |
| `license`          | Commonly "ISC" for open source                     |
| `private`          | `true` to prevent publishing to npm                |
| `dependencies`     | Packages required in production                    |
| `devDependencies`  | Packages needed during development                 |
| `peerDependencies` | Expected to be installed separately by the user    |
| `scripts`          | Commands to build, run, or test your app           |
| `main`             | Entry point file of your project (e.g. `index.js`) |

- 🟢 `npm start` runs the default script
- 🟢 `npm run <script-name>` runs a custom script

---

## 🧠 JavaScript Basics

### ✅ Scope

- **Global** – accessible anywhere
- **Function** – accessible inside a function
- **Block** – accessible within `{}` (e.g. inside `if`, `for`)

### ✅ Variables

- `let` – block-scoped, can change
- `const` – block-scoped, **cannot** be reassigned
- `var` – function-scoped, avoid in modern JS

---

## 📊 Data Types

### 🔹 Primitive

- `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`

### 🔸 Non-Primitive

- `Object`, `Array`, `Function`

---

## 🧱 Objects

- Store **key-value** pairs:

  ```js
  const user = { name: "Ana", age: 25 };
  ```

- Access with dot `user.name` or brackets `user["age"]`
- Objects are **mutable**

---

## 📚 Arrays

- Ordered list of values:

  ```js
  const fruits = ["apple", "banana"];
  ```

- Access with index `fruits[0]`
- Common methods:

  - `push`, `pop`, `shift`, `unshift`
  - `map`, `filter`, `forEach`, `reduce`

- Arrays are **mutable**

---

## 🛠️ Functions

### 🧩 Types

- **Named**:

  ```js
  function greet() {}
  ```

- **Anonymous**:

  ```js
  const greet = function () {};
  ```

- **Arrow**:

  ```js
  const greet = () => {};
  ```

- **IIFE** (Immediately Invoked):

  ```js
  (function () {})();
  ```

- **Generator**:

  ```js
  function* gen() {
    yield 1;
  }
  ```

- **Recursive**:

  ```js
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  ```

- **Higher-Order** (takes/returns other functions)
  ```js
  function operate(func, a, b) {
    return func(a, b);
  }
  ```

### 🧠 Concepts

- Functions are **first-class-citizens**:
  ✅ Can be assigned to variables

  ```js
  const greet = function () {
    console.log("Hello World");
  };

  const myObj = {
    sayHello: function () {
      console.log("Hi there!");
    },
  };
  ```

  ✅ Passed as arguments (callbacks)

  ```js
  function performAction(callback) {
    callback();
  }
  performAction(greet);
  ```

  ✅ Returned from other functions (closures)

```js
    function createMultiplier(multiplier) {
        return function(number) {
            return number \* multiplier;
        };
    }
    const double = createMultiplier(2);
```

---

## 🚀 Intro to Node.js

Node.js lets you run JavaScript **outside the browser** (e.g., servers, scripts).
Commonly used for backend development.

---

## 📦 NPM (Node Package Manager)

- Manages packages and project dependencies
- Commands:

  - `npm init` → create a `package.json`
  - `npm install <pkg>` → install a package
  - `npm install` → install all listed dependencies

---
