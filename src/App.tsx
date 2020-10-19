import * as React from "react";
import MatrixContainer from "./containers/MatrixContainer";
import "./styles.css";
import Matrix from "./Matrix";

export default function App() {
  return (
    <div className="App">
      <h1>JS Matrix</h1>
      <MatrixContainer />
      <Matrix />
    </div>
  );
}
