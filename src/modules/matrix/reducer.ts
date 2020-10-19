import { MatrixState, MatrixAction } from "./types";

const initialState: MatrixState = [];

function reducer(state: MatrixState = initialState, action: MatrixAction) {
  switch (action.type) {
    case "matrix/CREATE_MATRIX":
      return state.concat(action.payload);
    case "matrix/REMOVE_MATRIX":
      return state.filter((matrix) => matrix.id !== action.payload);
    default:
      return state;
  }
}

export default reducer;
