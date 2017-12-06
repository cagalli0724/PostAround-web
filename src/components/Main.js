import React from 'react';
import { WrappedRegister } from './Register';
import {Login} from './Login';
import {Home} from './Home';
import {PropTypes} from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

export class Main extends React.Component {


     static propTypes = {
       isLoggedIn: PropTypes.bool.isRequired,
       handleLogin: PropTypes.func.isRequired,
     }
    getLogin = ()=>{
        return this.props.isLoggedIn? <Redirect to="/home"/>:<Login handleLogin={this.props.handleLogin}/>;
    }
    getRoot = ()=>{
        return <Redirect to="/login"/>


    }
    getHome = ()=>{
        return this.props.isLoggedIn ?<Home/>:<Redirect to="/login"/>;

    }


 render() {
   return (
     <section className="main">
     <div className="main">
        <Switch>
            <Route exact path="/" render={this.getRoot}/>
             <Route path="/login" render={this.getLogin}/>
             <Route path="/register" component={WrappedRegister}/>
             <Route path="/home" render={this.getHome}/>
             <Route component={Login}/>
        </Switch>


     </div>
     </section>
   );
 }
}