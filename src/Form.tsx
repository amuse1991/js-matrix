import React, { useState } from "react";
import styled from "styled-components";
import { useMatrixState, useMatrixDispatch } from "./contexts/matrix";

const StyledForm = styled.form``;

export default function Form() {
  const matrixDispatch = useMatrixDispatch();
  const [formState, formDispatch] = useState({ row: 0, column: 0 });

  const handleChange = (event: any) => {
    formDispatch({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <StyledForm onChange={handleChange}>
      <label> row </label>
      <input name="row" value={formState.row} />
      <label> column </label>
      <input name="column" value={formState.column} />
      <button>create</button>
    </StyledForm>
  );
}
