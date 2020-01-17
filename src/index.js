import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "./components/Layouts";
import Logic from "./components/Logic";

function App() {
  return (
    <Fragment>
      <Header />
      <Logic />
      <Footer />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
