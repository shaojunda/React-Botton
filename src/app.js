import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button value="按钮" />
      </div>
    );
  }
}

export default App;
