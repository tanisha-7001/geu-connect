import { withAuthenticator } from '@aws-amplify/ui-react';
import HomePage from './HomePage';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';


function Login({ signOut, user }) {
  return (
    <>
      <HomePage/>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);