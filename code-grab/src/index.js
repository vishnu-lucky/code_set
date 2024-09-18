import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';

const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <App />
  </ClerkProvider>
);
console.log("Publishable Key:", clerkPublishableKey);
