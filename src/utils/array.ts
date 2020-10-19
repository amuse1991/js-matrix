export const create2DArray = (
  row: number,
  col: number,
  initVal: number = 0
) => {
  return Array.from({ length: row }, () => Array(col).fill(initVal));
};
