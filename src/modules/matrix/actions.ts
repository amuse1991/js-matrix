import { Matrix } from "./types";

export const CREATE_MATRIX = "matrix/CREATE_MATRIX" as const;
export const REMOVE_MATRIX = "matrix/REMOVE_MATRIX" as const;

// 액션 생성 함수
export const createMatrix = (matrix: Matrix) => ({
  type: CREATE_MATRIX,
  payload: {
    ...matrix
  }
});

export const removeMatrix = (id: number) => ({
  type: REMOVE_MATRIX,
  payload: id
});
