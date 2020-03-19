import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage/Homepage';
import All from './Whole_Lib/All';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  ReactDOM.render(<All/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
