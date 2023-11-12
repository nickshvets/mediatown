import React from 'react';
import { createRoot } from 'react-dom/client';
 

const App = () => {
 
  return (
      <div>App</div>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(<App />);
