// host-app/src/App.js
import React, { Suspense } from 'react';

const App1 = React.lazy(() => import("app1/App")); // Importing from remote app1
const App2 = React.lazy(() => import("app2/App")); // Importing from remote app2

const App = () => {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading App 1...</div>}>
        <App1 />
      </Suspense>
      <Suspense fallback={<div>Loading App 2...</div>}>
        <App2 />
      </Suspense>
    </div>
  );
};

export default App;
