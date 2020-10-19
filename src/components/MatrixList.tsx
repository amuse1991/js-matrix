import React from "react";
import { Matrix } from "../modules/matrix";
import MatrixItem from "./MatrixItem";

type MatrixListProps = {
  items: Matrix[];
  onRemove: (id: number) => void;
};

function MatrixList({ items, onRemove }: MatrixListProps) {
  return (
    <>
      {items.map((matrix) => (
        <MatrixItem
          key={matrix.id}
          id={matrix.id}
          columns={matrix.columns}
          rows={matrix.rows}
          values={matrix.values}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}

export default MatrixList;
