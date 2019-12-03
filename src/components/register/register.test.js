import React from 'react';
import ReactDOM from 'react-dom';
import register from './register';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<register />, div);
  ReactDOM.unmountComponentAtNode(div);
});