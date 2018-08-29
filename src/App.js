import React, { Component } from 'react';
import './App.css';
import Router from 'Router';
import Footer from 'components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }
  componentDidMount() {
    if (!window.sessionStorage.pclDyno) {
      this.setState({loader: true});
      fetch('https://pin-cl-s-275.herokuapp.com/confirm-live', {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json()).then((json) => {
        setTimeout(() => {
          window.sessionStorage.setItem('pclDyno', 'loaded');
          this.setState({loader: false});
        }, 2000);
      }).catch((e) => {
        alert('Heroku server currently unavailable');
        if (window.sessionStorage.pclDyno) {
          window.sessionStorage.removeItem('pclDyno');
        }
      });
    }
  }
  render() {
    if (this.state.loader) {
      return (
        <div className="App">
          <div style={{textAlign: "center"}}>
            <img
              src={require('./img/loader.gif')}
              alt=""
              height="36px"
              width="36px"
              style={{marginTop: "30px"}}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Router/>
          <Footer/>
        </div>
      );

  }
}

export default App;
