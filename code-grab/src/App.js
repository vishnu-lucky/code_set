import { SignedIn, SignedOut } from '@clerk/clerk-react';
import SignInPage from './components/SignInPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <SignInPage />
      </SignedOut>
    </div>
  );
}

export default App;
