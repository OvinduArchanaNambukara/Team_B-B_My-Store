import React from 'react';
import "./assets/style_sheets/main.scss"
import Client from "./Client";
import {Provider} from "react-redux";
import {store} from './store/reducers';


function App() {
  return (
      <Provider store={store}>
        <Client/>
      </Provider>
  );
}

export default App;
