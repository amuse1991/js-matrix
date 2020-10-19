import { createMatrix, removeMatrix } from "./actions";

// 액션 객체 타입
export type MatrixAction =
  | ReturnType<typeof createMatrix>
  | ReturnType<typeof removeMatrix>;

// state에서 사용할 matrix 타입 정의
export type Matrix = {
  id: number;
  rows: number;
  columns: number;
  values?: number[];
};

// state 타입 정의
export type MatrixState = Matrix[];
