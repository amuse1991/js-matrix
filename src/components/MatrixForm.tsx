import React, { useState, ChangeEvent, FormEvent } from "react";
import { Matrix } from "../modules/matrix/types";

type MatrixFormProps = {
  onCreate: (matrix: Matrix) => void;
};

function MatrixForm({ onCreate }: MatrixFormProps) {
  const initialState: Matrix = { rows: 0, columns: 0 };
  const [state, dispatch] = useState(initialState);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      ...state,
      [name]: value
    });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(state);
    dispatch(initialState);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
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
      />
      <button type="submit">create</button>
    </form>
  );
}

export default MatrixForm;
