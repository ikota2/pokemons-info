import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { List } from "./components/List/List";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/catalog/:page' component={List} />
      </BrowserRouter>
    </div>
  );
}

export default App;
