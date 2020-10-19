import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { createMatrix, removeMatrix, Matrix } from "../modules/matrix";
import MatrixForm from "../components/MatrixForm";
import MatrixList from "../components/MatrixList";

function MatrixContainer() {
  const matrixState = useSelector((state: RootState) => state.matrix);
  const dispatch = useDispatch();

  const onCreate = (matrix: Matrix) => {
    dispatch(createMatrix(matrix));
  };
  const onRemove = (id: number) => {
    dispatch(removeMatrix(id));
  };

  return (
    <>
      <h1>{matrixState.length}</h1>
      <MatrixForm onCreate={onCreate} />
      <MatrixList items={matrixState} onRemove={onRemove} />
    </>
  );
}

export default MatrixContainer;
