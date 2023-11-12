import React from 'react';
import { createRoot } from 'react-dom/client';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { RootState } from './reducers';


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
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
