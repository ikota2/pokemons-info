import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { List } from "./components/List/List";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path='/'>
          <Redirect to='/catalog/0' />
        </Route>
        <Route path='/catalog/:page' component={List} />
      </BrowserRouter>
    </div>
  );
}

export default App;
