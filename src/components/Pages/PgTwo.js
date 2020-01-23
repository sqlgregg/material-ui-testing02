import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function PgTwo() {
  const [names, setNames] = useState({
    FirstName: "unknown",
    LastName: "unknown"
  });
  console.log(names);

  const retrieveData = function() {
    console.log("Button Was Clicked");
    fetch("https://go-hello-world-aestandard.appspot.com/getjson")
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => setNames(data))
      .then(names => console.log(names));
  };

  return (
    <Fragment>
      <Typography variant="body1" gutterBottom>
        Welcome to PgTwo {names.FirstName} {names.LastName}
      </Typography>
      <Button onClick={retrieveData} variant="contained" color="primary">
        Click to Retrieve Data
      </Button>
    </Fragment>
  );
}
export default PgTwo;
