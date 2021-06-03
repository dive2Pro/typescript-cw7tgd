interface MapFunc {
  (): MapFunc;
  <T, O>(mapper: (t: T) => O, input: T[]): O[];
}

let map: MapFunc = (mapper, input) => {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input.map(mapper);
};

// 根据返回值的不同, [0]. 后面能触发的提示也不相同.
map(
  s => {
    return 1;
  },
  [1, 2, 3]
)[0];
