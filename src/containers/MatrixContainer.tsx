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
      <ul>
        <li>n*m을 입력하면 n*m 크기 매트릭스를 생성합니다.</li>
        <li>
          n*m*i을 입력하면 n*m 크기 매트릭스를 생성하고, i로 초기화합니다.
        </li>
        <li>JS 코드를 입력하면 코드 실행 결과에 따라 매트릭스를 생성합니다.</li>
      </ul>
      <MatrixForm onCreate={onCreate} />
      <MatrixList items={matrixState} onRemove={onRemove} />
    </>
  );
}

export default MatrixContainer;
