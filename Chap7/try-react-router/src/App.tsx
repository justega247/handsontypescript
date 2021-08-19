import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import { Route, Switch } from "react-router-dom";
import ScreenC from "./ScreenC";

function App() {
  const renderScreenC = (props: any) => {
    // console.log("Screen C props", props);
    return <ScreenC {...props} message="This is screen C" />;
  };

  return (
    <Switch>
      <Route exact path="/" component={ScreenA} />
      <Route path="/b" component={ScreenB} />
      <Route path="/c/:userid" render={renderScreenC} />
    </Switch>
  );
}

export default App;
