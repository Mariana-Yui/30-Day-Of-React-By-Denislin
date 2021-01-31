/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { countriesData } from './data/countries';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      txt
    } = this.props.data;
    return (
      <header>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>{firstName + ' ' + lastName}</h4>
        <h5>{date}</h5>
        <h5>{txt}</h5>
      </header>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, capital, languages, population, flag, currency } = this.props.data;

    return (
      <main>
        <img src={flag} alt="country flag" width="200" height="100" />
        <div>{name}</div>
        <div>Capital: {capital}</div>
        <div>Language: {languages}</div>
        <div>Population: {population}</div>
        <div>Currency: {currency}</div>

        <button onClick={this.props.changeCountry}>Select Country</button>
        <button onClick={this.props.changeSystemBg}>Select Country</button>
      </main>
    );
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { date } = this.props;

    return <footer>Copyright {date.getFullYear()}</footer>;
  }
}

class App extends Component {
  state = {
    index: 0,
    systemClass: 'light'
  };

  handleChangeCountry = () => {
    let index = Math.floor(Math.random() * countriesData.length);
    if (index === this.state.index) {
      index = (index + 1) % countriesData.length;
    }
    this.setState({ index });
  };
  handleChangeSystemBg = () => {
    const toggled = this.state.systemClass === 'light' ? 'dark' : 'light';
    this.setState({ systemClass: toggled });
  };

  render() {
    const { index, systemClass } = this.state;
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh'
      },
      date: 'Jan 31, 2021',
      txt: 'Select a country for your next holiday'
    };
    const date = new Date();

    return (
      <div className={['app', systemClass].join(' ')}>
        <Header data={data} />
        <Main
          data={countriesData[index]}
          changeCountry={this.handleChangeCountry}
          changeSystemBg={this.handleChangeSystemBg}
        />
        <Footer date={date} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
