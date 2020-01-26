import React from "react";
import "./App.scss";
import PhotoItem from "./components/photoItem/PhotoItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <PhotoItem></PhotoItem>
            </div>
            <div className="col-md-4">
              <PhotoItem></PhotoItem>
            </div>
            <div className="col-md-4">
              <PhotoItem></PhotoItem>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
