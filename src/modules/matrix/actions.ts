import { Matrix } from "./types";

export const CREATE_MATRIX = "matrix/CREATE_MATRIX" as const;
export const REMOVE_MATRIX = "matrix/REMOVE_MATRIX" as const;

// 액션 생성 함수
let nextId = 0; // matrix id 값
export const createMatrix = (matrix: Matrix) => ({
  type: CREATE_MATRIX,
  payload: {
    id: nextId++,
    ...matrix
  }
});

export const removeMatrix = (id: number) => ({
  type: REMOVE_MATRIX,
  payload: id
});
