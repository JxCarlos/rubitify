import React from 'react';
import './App.css';
import Route from "./routes/Routes.js";
import { Provider } from "react-redux";

import { store } from "./helpers";


function App() {
  return (
    <Provider store={store}>
      <div className="black">
        <Route />
      </div>
    </Provider>
  );
}

export default App;
