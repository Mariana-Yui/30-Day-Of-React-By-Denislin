import React from 'react';
import ReactDOM from 'react-dom';
import { tenHighestPopulation } from './data/ten_most_highest_populations';

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  if (num === 2 || num === 3) return true;
  let i = 2;
  let sqrt = Math.floor(Math.sqrt(num));
  while (i <= sqrt) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};
// exercise1
const NumsFormattedOne = ({ nums }) => {
  const setColor = (num) => {
    if (isPrime(num)) return '#ff4e49';
    else if (num % 2 === 0) return '#00c46b';
    else return '#ffdb00';
  };

  return nums.map((num) => {
    const style = {
      backgroundColor: setColor(num)
    };
    return (
      <div style={style} key={num}>
        <span>{num}</span>
      </div>
    );
  });
};
const ExerciseOne = ({ data: { title, subtitle, nums } }) => {
  return (
    <main className="exercise1">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <div className="nums-wrap">
        <NumsFormattedOne nums={nums} />
      </div>
    </main>
  );
};

// exercise2
const NumsFormattedTwo = ({ nums }) => {
  const hexaColor = () => {
    const str = '0123456789abcdef';
    let color = '';
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    color = `#${color}`;
    return color;
  };
  return nums.map(() => {
    const color = hexaColor();
    const style = {
      backgroundColor: color
    };
    return (
      <div style={style} key={color}>
        <span>{color}</span>
      </div>
    );
  });
};
const ExerciseTwo = ({ data: { title, subtitle, nums } }) => {
  return (
    <main className="exercise2">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <div className="nums-wrap">
        <NumsFormattedTwo nums={nums} />
      </div>
    </main>
  );
};

// exercise3
const CountriesFormatted = ({ tenHighestPopulation }) => {
  const calPercent = (population) => {
    return ((population * 1e2) / tenHighestPopulation[0].population).toFixed(2) + '%';
  };

  return tenHighestPopulation.map(({ country, population }) => {
    const style = { width: calPercent(population) };
    return (
      <li>
        <div className="lt">{country}</div>
        <div className="md">
          <div style={style}></div>
        </div>
        <div className="rt">{population}</div>
      </li>
    );
  });
};
const ExerciseThree = ({ data: { title, subtitle, desc, tenHighestPopulation } }) => {
  return (
    <main className="exercise3">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <h5>{desc}</h5>
      <ul>
        <CountriesFormatted tenHighestPopulation={tenHighestPopulation} />
      </ul>
    </main>
  );
};

const App = () => {
  const nums = (function () {
    const nums = [];
    for (let i = 0; i <= 31; i++) {
      nums.push(i);
    }
    return nums;
  })();
  const data = {
    exercise1: {
      title: '30 Days Of React',
      subtitle: 'Number Generator',
      nums
    },
    exercise2: {
      title: '30 Days Of React',
      subtitle: 'Hexadecimal Colors',
      nums
    },
    exercise3: {
      title: '30 Days Of React',
      subtitle: 'World Population',
      desc: 'Ten most populate countries',
      tenHighestPopulation
    }
  };

  return (
    <div className="app">
      <ExerciseOne data={data.exercise1} />
      <ExerciseTwo data={data.exercise2} />
      <ExerciseThree data={data.exercise3} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
