import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relativeList = ["Vikram", "Aditya", "Raja", "Rahul", "Priya"];
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key={"relativeList"}>
          {relativeList.map((relative, i) => (
            <li key={`relativeListItem${i + 1}`}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
