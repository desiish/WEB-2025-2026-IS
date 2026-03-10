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
function myMapNumbers(
  arr: readonly number[],
  fn: (value: number, index?: number, array?: readonly number[]) => number
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
function myFilterNumbers(
  arr: readonly number[],
  predicate: (value: number, index: number, array?: readonly number[]) => boolean
): number[];
```

# Задача 3: myReduce 

Напишете функция `myReduce`, която:
- приема масив от числа `number[]`
- приема reducer callback функция и initialValue

Reducer callback функцията се извиква с аргументи:
`(acc, value, index, array)`


## Сигнатура
```ts
function myReduce(
  arr: readonly number[],
  reducer: (
    acc: number,
    value: number,
    index?: number,
    array?: readonly number[]
  ) => number,
  initialValue: number
): number;
```

# Задача 4: frequencyMap

Напишете функция `frequencyMap`, която:
- приема масив от числа `number[]`
- връща обект, показващ **колко пъти се среща всяко число**
- **трябва да използва `reduce`** 
- връща резултат от тип `Record<string, number>`

## Сигнатура
```ts
export function frequencyMap(
  arr: readonly number[]
): Record<string, number>;
```