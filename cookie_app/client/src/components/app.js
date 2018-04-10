import React, { Component } from 'react';
import Cookies from 'cookies-js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sugar: Cookies.get('sugar'),
      chocolate: Cookies.get('chocolate'),
      lemon: Cookies.get('lemon')
    }
    this.countSugarCookies = this.countSugarCookies.bind(this);
    this.countChocolateCookies = this.countChocolateCookies.bind(this);
    this.countLemonCookies = this.countLemonCookies.bind(this);
    this.clearCookies = this.clearCookies.bind(this);
  }

  countSugarCookies() {
    const countCookies = parseInt(this.state.sugar + 1);
    Cookies.set('sugar', countCookies);
    this.setState({
      sugar: countCookies
    });
  }

  countChocolateCookies() {
    const countCookies = parseInt(this.state.chocolate + 1);
    Cookies.set('chocolate', countCookies);
    this.setState({
      chocolate: countCookies
    });
  }

  countLemonCookies() {
    const countCookies = parseInt(this.state.lemon + 1);
    Cookies.set('lemon', countCookies);
    this.setState({
      lemon: countCookies
    });
  }

  clearCookies() {
    this.setState({
      sugar: Cookies.set('sugar', 0).get('sugar'),
      chocolate: Cookies.set('chocolate', 0).get('chocolate'),
      lemon: Cookies.set('lemon', 0).get('lemon')
    });
  }

  render() {
    return (
      <div>
      <p>
      <img src={'https://assets.marthastewart.com/styles/wmax-300/d35/old-fashioned-sugar-hol05-msd101477/old-fashioned-sugar-hol05-msd101477_vert.jpg'} className='sugarcookie'/>
      <h1>Sugar Cookie Count: {this.state.sugar}</h1>
      <button onClick={this.countSugarCookies}>Eat Sugar Cookie</button>
      </p>
      <p>
      <img src={'https://assets.marthastewart.com/styles/wmax-300/d20/cookie-sd101477toc6s/cookie-sd101477toc6s_vert.jpg'} className='chocolatecookie'/>
      <h1>Chocolate Cookie Count: {this.state.chocolate}</h1>
      <button onClick={this.countChocolateCookies}>Eat Chocolate Cookie</button>
      </p>
      <p>
      <img src={'https://assets.marthastewart.com/styles/wmax-300/d24/mld103002_0608_ging_lemn/mld103002_0608_ging_lemn_xl.jpg'} className='lemoncookie'/>
      <h1>Lemon Cookie Count: {this.state.lemon}</h1>
      <button onClick={this.countLemonCookies}>Eat Lemon Cookie</button>
      </p>
      <p>
        <button onClick={this.clearCookies}>Clear Cookies</button>
      </p>
      </div>
    );
  }
}

export default App;
