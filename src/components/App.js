import React, { Component } from 'react';
import '../styles/App.css';
import {Header} from './header.js';
import {Main} from './Main.js';
import {TOKEN_KEY} from '../constant.js';


class App extends Component {
 state = {
   isLoggedIn: !!localStorage.getItem(TOKEN_KEY),
 }

 handleLogin = (token) => {
   this.setState({ isLoggedIn: true });
   localStorage.setItem(TOKEN_KEY, token);
 }

 handleLogout = () => {
   this.setState({ isLoggedIn: false });
   localStorage.removeItem(TOKEN_KEY);
 }

 render() {
   return (
     <div className="App">
       <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
       <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
     </div>
   );
 }
}


export default App;
