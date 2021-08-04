import React from 'react';
import "./assets/style_sheets/main.scss"
import Client from "./Client";
import {Provider} from "react-redux";
import {store} from './store/reducers/RootReducer';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Client/>
        </Provider>
      </ApolloProvider>
  );
}

export default App;
