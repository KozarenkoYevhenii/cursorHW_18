import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Redirect exact path="/" to="/signIn" />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
    </div>
  );
}

export default App;
