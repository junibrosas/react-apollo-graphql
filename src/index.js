import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'cross-fetch/polyfill';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from 'apollo-boost';
import 'dotenv/config';
require('dotenv').config({path: __dirname + '/.env'})

const GET_ORGANIZATION = gql`
{
  organization(login: "the-road-to-learn-react") {
    name
    url
  }
}`;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 547c298c22e7a80b006d7b2a37a3c4056f9be1d7`
      }
    })
  }
});

client.query({ query: GET_ORGANIZATION }).then(console.log);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
