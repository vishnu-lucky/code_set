import React from 'react';
import { UserButton } from '@clerk/clerk-react';

function Dashboard() {
  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <UserButton />
    </div>
  );
}

export default Dashboard;
