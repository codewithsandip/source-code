import React from "react";

const RemoteApp = React.lazy(() => import("remote/RemoteApp"));

const App = () => (
  <div style={{ padding: 20 }}>
    <h2>Shell Application</h2>
    <React.Suspense fallback={<div>Loading Remote...</div>}>
      <RemoteApp />
    </React.Suspense>
  </div>
);

export default App;
