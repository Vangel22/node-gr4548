# 📘 JavaScript & Node.js Concepts – Class Overview

---

## 🔹 JavaScript Concepts

### ✅ Destructuring

Destructuring allows you to extract values from arrays or properties from objects into separate variables.

```js
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name); // Alice
```

### ✅ Spread Operator

The spread operator (`...`) is used to expand or copy arrays/objects.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

---

## 🔹 Working with Objects

### 🔑 Object.keys()

Returns an array of the object’s property names.

```js
Object.keys({ a: 1, b: 2 }); // ['a', 'b']
```

### 📦 Object.values()

Returns an array of the object’s values.

```js
Object.values({ a: 1, b: 2 }); // [1, 2]
```

### 🧹 Object.entries()

Returns an array of key-value pairs.

```js
Object.entries({ a: 1, b: 2 }); // [['a', 1], ['b', 2]]
```

---

## 🔹 Modules

We have 3 types of modules:

1. Local – We create them ourselves.
2. Core – Built into Node.js (e.g., fs, path, http).
3. Third-party – Installed via npm (e.g., express, lodash).

✅ **Why use modules?**

- Code organization
- Reusability
- Easier testing and maintenance

---

## 🔹 File System (Node.js)

Use Node’s built-in `fs` module to work with files.

```js
const fs = require("fs");

// Read a file
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```

Other examples:

- `fs.writeFile()`
- `fs.appendFile()`
- `fs.unlink()` (delete)

---

## 🔹 Callbacks

A **callback** is a function passed into another function as an argument to be executed later.

```js
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

greet("Sam", () => {
  console.log("This is a callback function.");
});
```

---

## 🔹 Promises

Promises represent the eventual completion (or failure) of an async operation.

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

Using `async/await`:

```js
async function load() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
```

---

## 📦 Summary

| Concept         | Description                              |
| --------------- | ---------------------------------------- |
| Destructuring   | Extract values from arrays/objects       |
| Spread Operator | Copy/spread arrays or objects            |
| Object Methods  | keys(), values(), entries()              |
| Local Modules   | Organize code into files using `require` |
| File System     | Read/write files with `fs`               |
| Callbacks       | Function passed as an argument           |
| Promises        | Handle async code cleanly                |

---
