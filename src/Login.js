import { withAuthenticator } from '@aws-amplify/ui-react';
import HomePage from './HomePage';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';
Amplify.configure(config);


function Login({ signOut, user }) {
  return (
    <>
      <HomePage/>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);