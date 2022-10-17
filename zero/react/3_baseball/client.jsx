// require은 node의 모듈 시스템
import React  from 'react';
import ReactDOM from'react-dom/client';
import Baseball from './Baseball';

// const React = require('react');
// const ReactDOM = require('react-dom');
// const Baseball = require('./Baseball');

ReactDOM.createRoot(document.querySelector("#root")).render(<Baseball />); 