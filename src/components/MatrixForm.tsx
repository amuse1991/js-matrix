import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Matrix as MatrixType } from "../modules/matrix/types";
import { create2DArray } from "../utils/array";
type MatrixFormProps = {
  onCreate: (matrix: MatrixType) => void;
};

function runFunction() {}

function MatrixForm({ onCreate }: MatrixFormProps) {
  const nextId = useRef(0);
  const [inputValue, dispatch] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const squareReg = /\d+\*\d+(\*\d*)*/g;
    // onCreate({ ...state, id: nextId.current });
    if (squareReg.test(inputValue)) {
      const [rowStr, colStr, initVal] = inputValue
        .split("*")
        .map((str) => Number(str));
      console.log(create2DArray(2, 3));
      onCreate({
        id: nextId.current,
        rows: rowStr,
        columns: colStr,
        values: create2DArray(rowStr, colStr, initVal)
      });
    }
    dispatch("");
    nextId.current += 1;
  };
  return (
    <form onSubmit={onSubmit}>
      {/* <input
        name="rows"
        onChange={onChange}
        placeholder="rows"
        value={state.rows}
      />
      <input
        name="columns"
        onChange={onChange}
        placeholder="columns"
        value={state.columns}
      /> */}
      <input name="create" onChange={onChange} value={inputValue} />
      <button type="submit">create</button>
    </form>
  );
}

export default MatrixForm;
