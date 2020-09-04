import React from 'react';
import ReactDOM from 'react-dom';
import ContentEditor from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.render(
    <React.StrictMode>
      <ContentEditor />
    </React.StrictMode>,
    rootEl
  );
}

