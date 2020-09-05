import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Genres from "./components/Genres";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/:id" component={Genres}/>
        <Route exact path="/" component={Genres} />
      </BrowserRouter>
    </div>
  );
}

export default App;
