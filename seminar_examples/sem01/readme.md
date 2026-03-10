## Инсталиране на Node.js

-> https://nodejs.org

Проверяваме дали всичко работи:

```
node -v
npm -v
```

Трябва да се покажат версии на Node и npm.

## Създаване на нов проект

-> **Създаваме папка за проекта**:

```
mkdir my-server
cd my-server
```

-> **Инициализираме проекта**:

```
npm init -y
```

Това ще създаде файл:

```
package.json
```

## Инсталиране на TypeScript

Инсталираме TypeScript като dev dependency:

```
npm install -D typescript
```
Проверяваме: 

```
npx tsc -v
```

## Инсталиране на ts-node

ts-node позволява да стартираме TypeScript директно.

```
npm install -D ts-node
```

## Инсталиране на Node types

За да имаме TypeScript типове за Node.js:

```
npm install -D @types/node\
```

## Генериране на tsconfig.json

Създаваме TypeScript конфигурация:

```
npx tsc --init
```

!Важни настройки:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "types": ["node"],
    "skipLibCheck": true
  },
  "include": ["src"]
}

## Структура на проекта

Създаваме папка src:

```
mkdir src
```

Структурата трябва да изглежда така:

```
my-ts-server
│
├─ src
│   └─ index.ts
│
├─ package.json
├─ tsconfig.json
```

## Добавяне на scripts

Отваряме package.json и добавяме:

```
"scripts": {
  "start": "ts-node src/index.ts"
  ...
}
```

## Стартиране на сървъра

```
npm start
```

## Очаквани devDependencies

В package.json трябва да имате:

```
"devDependencies": {
  "@types/node": "^...",
  "ts-node": "^...",
  "typescript": "^..."
}
```