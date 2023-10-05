import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Post from './new/post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Post />
  </React.StrictMode>
);

