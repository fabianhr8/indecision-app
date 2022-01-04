import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
// This comes from node_modules/normalize.css
import 'normalize.css'; 
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));