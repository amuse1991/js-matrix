import React from "react";
import { Matrix } from "../modules/matrix";
import styled from "styled-components";

const StyledMatrix = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 30%;
  margin: 1rem;
`;
const MatrixTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  td {
    border: 1px solid black;
  }
`;
const MatrixHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  i:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

type MatrixItemProps = Matrix & {
  onRemove: (id: number) => void;
};

function MatrixItem({ id, rows, columns, values, onRemove }: MatrixItemProps) {
  const onClickRemoveBtn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onRemove(id);
  };
  return (
    <StyledMatrix>
      <MatrixHeader>
        <p>
          ID: {id} {rows}*{columns}
        </p>
        <i onClick={onClickRemoveBtn}>🪓</i>
      </MatrixHeader>
      <MatrixTable>
        <tbody>
          {Array.from({ length: rows }, (_, ridx) => (
            <tr key={ridx}>
              {Array.from({ length: columns }, (_, cidx) => (
                <td key={cidx}>1</td>
              ))}
            </tr>
          ))}
        </tbody>
      </MatrixTable>
    </StyledMatrix>
  );
}

export default MatrixItem;
