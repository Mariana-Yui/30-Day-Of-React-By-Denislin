/* eslint-disable jsx-a11y/img-redundant-alt */
/**
 * 03
import React from 'react';
import ReactDOM from 'react-dom';
import asabenehImage from './images/asabeneh.jpg';

const welcome = 'Welcome to 30 Days of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const author = {
  firstName: 'asabeneh',
  lastName: 'yetayeh'
};
const date = 'Jan 20, 2021';

const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor; {author.firstName} - {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

const techs = ['HTML', 'CSS', 'JavaScript'];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

console.log(asabenehImage);
const user = (
  <div>
    <img src={asabenehImage} alt="asabeneh image"></img>
  </div>
);

// JSX element, main
const main = (
  <main>
    <p>Prerequisite to get started </p>
    <strong>
      <em>react.js</em>
    </strong>
    <ul>{techsFormatted}</ul>
    {result}
    {personAge}
    {user}
  </main>
);

const copyRight = 'Copyright 2021';

// JSX element, footer
const footer = (
  <footer>
    <p>{copyRight}</p>
  </footer>
);

// JSX element, app, a container or a parent
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
*/
/**
 * 04
 */
import React from 'react';
import ReactDOM from 'react-dom';

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const App = () => {
  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2021');
  };
  return (
    <div className="app">
      <Button text="show time" onClick={handleTime} />
      <Button text="Greet People" onClick={greetPeople} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
