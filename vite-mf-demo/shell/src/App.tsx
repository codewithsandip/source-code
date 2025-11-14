import React from "react";
const RemoteApp = React.lazy(() => import("remote/RemoteApp"));

export default function App() {
  return (
    <div>
      <h1>Shell App (Vite)</h1>
      <React.Suspense fallback={<div>Loading remote...</div>}>
        <RemoteApp />
      </React.Suspense>
    </div>
  );
}