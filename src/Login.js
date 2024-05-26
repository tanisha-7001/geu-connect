import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './HomePage';
 


function Login({ signOut, user }) {
  return (
    <>
      <HomePage/>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);