# Задача 1: myMapNumbers

Напишете функция `myMapNumbers`, която:
- приема масив от числа `number[]`
- приема callback функция
- връща **нов масив** със същата дължина
- **не променя** оригиналния масив
- callback функцията се извиква с аргументи:
  `(value, index, array)`


## Сигнатура
```ts
export function myMapNumbers(
  arr: readonly number[],
  fn: (value: number, index: number, array: readonly number[]) => number
): number[];
```

# Задача 2: myFilterNumbers

Напишете функция `myFilterNumbers`, която:
- приема масив от числа `number[]`
- приема predicate callback функция
- връща **нов масив** само с елементите, за които predicate връща `true`
- **не променя** оригиналния масив
- callback функцията се извиква с аргументи:
  `(value, index, array)`


## Сигнатура
```ts
export function myFilterNumbers(
  arr: readonly number[],
  predicate: (value: number, index: number, array: readonly number[]) => boolean
): number[];
```

# Задача 3: myReduce (само за числа)

Напишете функция `myReduce`, която:
- приема масив от числа `number[]`
- приема reducer callback функция и initialValue
  - accumulator започва от него
  - ако масивът е празен → връща `initialValue`

Reducer callback функцията се извиква с аргументи:
`(acc, value, index, array)`

❌ Забранено:
- `Array.prototype.reduce`

---

## Типове и сигнатури
```ts
export function myReduce(
  arr: readonly number[],
  reducer: (
    acc: number,
    value: number,
    index: number,
    array: readonly number[]
  ) => number
): number;

export function myReduce(
  arr: readonly number[],
  reducer: (
    acc: number,
    value: number,
    index: number,
    array: readonly number[]
  ) => number,
  initialValue: number
): number;
```