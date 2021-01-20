import React from 'react';
import ReactDOM from 'react-dom';
import htmlLogo from './images/html_logo.png';
import cssLogo from './images/css_logo.png';
import reactLogo from './images/react_logo.png';

// exercise 1
const logos = [htmlLogo, cssLogo, reactLogo];
const logosFormatted = logos.map((logo) => (
  <li>
    <img src={logo} alt="logo" />
  </li>
));
const exerciseOne = (
  <main className="exercise1">
    <h2>Front End Technologies</h2>
    <ul>{logosFormatted}</ul>
  </main>
);

// exercise 2

const app = <div className="app">{exerciseOne}</div>;

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
