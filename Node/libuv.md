# libuv in Node.js

## What is libuv?

In Node.js, **libuv** is a helper system that works in the background.

It helps Node.js perform:
- asynchronous operations
- non-blocking operations

Without libuv, Node.js would wait for every task to finish before moving ahead.

---

# Simple Explanation

Think of:

- JavaScript = Chef 👨‍🍳
- libuv = Helper/Waiter 🧑‍💼

The chef only cooks.

The helper:
- takes orders
- waits for tasks
- manages timing
- handles background work

So the chef never stops working.

---

# What libuv Does

libuv handles:
- File reading/writing
- Timers (`setTimeout`)
- Network requests
- Event loop
- Background tasks
- Thread pool

---

# Non-Blocking Nature

## What is Non-Blocking?

Non-blocking means:

> Node.js does not stop and wait for a task to finish.

Example:

```js
const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
   console.log(data);
});

console.log("Next Line");
```

Output:

```bash
Next Line
(file content later)
```

Why?

Because `readFile()` was given to libuv.

Node.js continued executing the next line.

---

# Asynchronous Nature

## What is Asynchronous?

Asynchronous means:

> A task starts in the background and finishes later.

libuv handles these background tasks.

---

# Example with setTimeout

```js
console.log("Start");

setTimeout(() => {
   console.log("Done");
}, 2000);

console.log("End");
```

Output:

```bash
Start
End
Done
```

---

# How This Works

1. `setTimeout()` task is sent to libuv
2. libuv starts the timer in background
3. JavaScript continues running
4. After 2 seconds, libuv sends callback back
5. Event loop executes callback

---

# Simple Flow

```text
JavaScript Code
      ↓
    libuv
      ↓
Background Work
      ↓
Callback Queue
      ↓
Event Loop
      ↓
Back to JavaScript
```

---

# Event Loop

The event loop is managed by libuv.

It continuously checks:
- completed tasks
- timers
- callbacks
- network events

---

# Thread Pool

Some tasks are heavy.

So libuv uses a thread pool (default: 4 threads).

Used for:
- file system
- crypto
- DNS lookup
- compression

---

# Important Point

JavaScript itself is single-threaded.

But Node.js becomes powerful because libuv handles background work separately.

---

# One-Line Definition

```text
libuv = background worker system of Node.js
```

It makes Node.js:
- asynchronous
- fast
- non-blocking
```