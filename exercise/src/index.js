import React from 'react';
import ReactDOM from 'react-dom';
import htmlLogo from './images/html_logo.png';
import cssLogo from './images/css_logo.png';
import reactLogo from './images/react_logo.png';
import Avatar from './images/asabeneh.jpg';

// exercise 1
const titleOne = 'Front End Technologies';
const logos = [htmlLogo, cssLogo, reactLogo];
const logosFormatted = logos.map((logo) => (
  <li>
    <img src={logo} alt="logo" />
  </li>
));
const ExerciseOne = () => (
  <main className="exercise1">
    <h2>{titleOne}</h2>
    <ul>{logosFormatted}</ul>
  </main>
);

// exercise 2
const titleTwo = 'SUBSCRIBE';
const descTwo = 'Sign up with your email address to receive news and updates';
const inputs = ['First name', 'Last name', 'Email'];
const inputFormatted = inputs.map((input) => <input type="text" placeholder={input} />);
const ExerciseTwo = () => (
  <main className="exercise2">
    <h2>{titleTwo}</h2>
    <p>{descTwo}</p>
    <form>{inputFormatted}</form>
    <div className="btn">Subscribe</div>
  </main>
);

// exercise3
const skills = [
  'HTML',
  'CSS',
  'Sass',
  'JS',
  'React',
  'Redux',
  'Node',
  'MongoDB',
  'Python',
  'Flask',
  'Django',
  'NumPy',
  'Pandas',
  'Data Analysis',
  'MYSQL',
  'GraphQL',
  'D3.js',
  'Gatsby',
  'Docker',
  'Heroku',
  'Git'
];
const skillsFormatted = skills.map((skill) => <div className="skill">{skill}</div>);
const tt3Name = 'ASABENEH YETAYEH';
const tt3Job = 'Senior Developer, Finland';
const tt3JoinTime = 'Joined on Aug 30, 2020';
const ExerciseThree = () => (
  <main className="exercise3">
    <div className="wrap">
      <img src={Avatar} alt="Asabeneh Yetayeh" />
      <div className="name">{tt3Name}</div>
      <div className="job">{tt3Job}</div>
      <div className="s-tt">SKILLS</div>
      <div className="skill-wrap">{skillsFormatted}</div>
      <div className="join-time">{tt3JoinTime}</div>
    </div>
  </main>
);

// exercise4
const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return `#${color}`;
};
const ExerciseFour = () => {
  const colorFormatted = [0, 1, 2, 3, 4, 5].map(() => {
    const bgColor = hexaColor();
    const style = {
      background: bgColor,
      color: '#ffffff'
    };
    return <div style={style}>{bgColor}</div>;
  });

  return <main className="exercise4">{colorFormatted}</main>;
};

const App = () => (
  <div className="app">
    <ExerciseOne />
    <ExerciseTwo />
    <ExerciseThree />
    <ExerciseFour />
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
