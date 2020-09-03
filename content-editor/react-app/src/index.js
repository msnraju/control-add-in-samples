import React from 'react';
import ReactDOM from 'react-dom';
import ContentEditor from './App';

if (document.getElementById('root')) {
  ReactDOM.render(
    <React.StrictMode>
      <ContentEditor />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

window.addEventListener('onControlAddInStartup', (e) => {
  console.log('onControlAddInStartup - cached');

  ReactDOM.render(
    <React.StrictMode>
      <ContentEditor />
    </React.StrictMode>,
    document.getElementById('controlAddIn')
  );
})


alert('react component');