import React from 'react';
import { SignIn } from '@clerk/clerk-react';

function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <SignIn />
    </div>
  );
}

export default SignInPage;
