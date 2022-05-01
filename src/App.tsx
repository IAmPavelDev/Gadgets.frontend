import React, { FC, ReactElement} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import userManager, {
  loadUser,
  signinRedirect,
  signoutRedirect
} from './auth/user-service';
import { isMetaProperty } from 'typescript';
import AuthProvider from './auth/authProvider';
import GadgetList from './gadgets/gadgetsList';
import SignInOIDC from './auth/SignInOIDC';
import SignOutOIDC from './auth/SignOutOIDC';
import GetAll from './gadgets/GetAll';

const App: FC<{}> = ():ReactElement => {
  loadUser();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => signinRedirect()}>Login</button>
        <AuthProvider userManager={userManager}>
          <Router>
            <Routes>
              <Route path='/' element={<GetAll/>}/>
              <Route path='/signout-oidc' element={<SignOutOIDC/>}/>
              <Route path='/signin-oidc' element={<SignInOIDC/>}/>
            </Routes>
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
