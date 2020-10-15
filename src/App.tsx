import * as React from "react";
import Form from "./Form";
import "./styles.css";
import Matrix from "./Matrix";
import { MatrixProvider } from "./contexts/matrix";

export default function App() {
  return (
    <MatrixProvider>
      <div className="App">
        <h1>JS Matrix</h1>
        <Form />
        <Matrix />
      </div>
    </MatrixProvider>
  );
}
