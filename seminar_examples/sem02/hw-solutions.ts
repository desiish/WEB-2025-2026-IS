function myMapNumbers(
  arr: readonly number[],
  fn: (value: number, index?: number, array?: readonly number[]) => number
): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }

  return result;
}

function myFilterNumbers(
  arr: readonly number[],
  predicate: (value: number, index?: number, array?: readonly number[]) => boolean
): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

function myReduce(
  arr: readonly number[],
  reducer: (
    acc: number,
    value: number,
    index?: number,
    array?: readonly number[]
  ) => number,
  initialValue: number
): number {
  let acc = initialValue;

  for (let i = 0; i < arr.length; i++) {
    acc = reducer(acc, arr[i], i, arr);
  }

  return acc;
}


export function frequencyMap(
  arr: readonly number[]
): Record<string, number> {
  return arr.reduce<Record<string, number>>((acc, value) => {
    const key = value.toString();
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
}