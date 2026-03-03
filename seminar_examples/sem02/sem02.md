# JavaScript: Въведение

---

## Типове данни в JavaScript

JavaScript е **динамично типизиран** език – не е нужно предварително да указваме типа на променливата.

### Примитивни типове

Примитивите са **immutable** (непроменими).

### 1. Number

Използва се за цели и дробни числа.

```js
let a = 10;
let b = 3.14;
let c = Infinity;
let d = NaN; // Not a Number
```

```js
"abc" * 2; // NaN
+"abc" //NaN
```

---

### 2. String

Текстови стойности.

```js
let name = "Ivan";
let greeting = 'Hello';
let message = `Hello, ${name}!`;
```

---

### 3. Boolean

Логически стойности.

```js
let isLoggedIn = true;
let hasAccess = false;
```

---

### 4. Undefined

Променлива, на която **не е присвоена стойност**.

```js
let x;
console.log(x); // undefined
```

---

### 5. Null

Умишлено зададена „празна“ стойност.

```js
let user = null;
```

> [!IMPORTANT]
> `null` ≠ `undefined`

---

## Референтни типове (Reference Types)

### 1. Object

```js
let person = {
  name: "Maria",
  age: 25
};
```

Достъп до свойства:

```js
person.name;      // Maria
person["age"];   // 25
```

---

### 2. Array

```js
let numbers = [1, 2, 3, 4];
```

```js
numbers[0]; // 1
numbers.length; // 4
```

---

### 3. Function

Функциите са обекти в js.

```js
function sayHi() {
  console.log("Hi!");
}
```

---

## Оператори в JavaScript

### Аритметични оператори

```js
+  // събиране
-  // изваждане
*  // умножение
/  // деление
%  // остатък
** // степенуване
```

```js
5 % 2; // 1
2 ** 3; // 8
```

---

### Оператори за присвояване

```js
=   // присвояване
+=  // a = a + 1
-=  // a = a - 1
*=  // a = a * 2
```

---

### Оператори за сравнение

```js
==   // равно (с преобразуване)
===  // строго равно (тип + стойност)
!=   // не е равно
!==  // строго не е равно
> < >= <=
```

> [!IMPORTANT]
> Винаги ще използваме `===`!

```js
5 == "5";  // true
5 === "5"; // false
```

---

### Логически оператори

```js
&& // AND
|| // OR
!  // NOT
```

```js
true && false; // false
true || false; // true
!true; // false
```

---

### Ternary оператор

```js
let result = age >= 18 ? "Adult" : "Child";
```

---

## Функции в JavaScript

### 1. Function Declaration

```js
function sum(a, b) {
  return a + b;
}
```

---

### 2. Function Expression

```js
const multiply = function(a, b) {
  return a * b;
};
```

---

### 3. Arrow Functions

```js
const divide = (a, b) => a / b;
```

С повече логика:

```js
const isEven = (n) => {
  return n % 2 === 0;
};
```

---

### 4. Параметри по подразбиране

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

---

### 5. Callback функции

```js
function process(callback) {
  callback();
}

process(() => console.log("Done!"));
```

---

## Условни конструкции (if / else)

Условните конструкции позволяват изпълнение на код **само ако дадено условие е вярно**.

### if

```js
let age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

---

### if / else

```js
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Child");
}
```

---

### if / else if / else

```js
let score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Very good");
} else {
  console.log("Poor");
}
```

---

### Truthy / Falsy стойности

Falsy стойности в JS:

* `false`
* `0`
* `""` (празен стринг)
* `null`
* `undefined`
* `NaN`

```js
if ("") {
  // няма да се изпълни
}
```

---

## Цикли (Loops)

Циклите се използват за **повтаряне на код**.

---

### for loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### while loop

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

---

### do...while

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

---

### for...of (масиви)

```js
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### for...in (обекти)

```js
let user = { name: "Ivan", age: 30 };

for (let key in user) {
  console.log(key, user[key]);
}
```

---

### break и continue

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // пропуска 3
  if (i === 5) break;    // спира цикъла
  console.log(i);
}
```

---

## Полезни проверки

### typeof

```js
typeof 5;          // "number"
typeof "hi";       // "string"
typeof undefined;  // "undefined"
typeof null;       // "object" (JS особеност)
```

---