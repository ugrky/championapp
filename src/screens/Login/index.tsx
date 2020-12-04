import firebase from 'firebase';
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import Headline from '../../components/Headline';
import PageLayout from '../../components/PageLayout';


// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
};


function LoginScreen() {
  return (
    <PageLayout>
      <Headline text="SIGN-IN" />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </PageLayout>
  );
}

export default LoginScreen;
