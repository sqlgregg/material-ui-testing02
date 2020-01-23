import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "./components/Layouts";
//import Logic from "./components/Logic";
import { PgHome, PgTwo } from "./components/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={PgHome} />
        <Route path="/pagetwo" exact component={PgTwo} />
      </Switch>
      <Footer />
    </Router>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
