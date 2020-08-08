import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PropsExample from './Pages/PropsExample';
import InstanceMethodExample from './Pages/InstanceMethodExample';
import CallbackExample from './Pages/CallbackExample';
import BubblingExample from './Pages/BubblingExample';
import ParentComponentExample from './Pages/ParentComponentExample';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="alink" to="/props">
              1. Props
            </Link>
            <Link className="alink" to="/instance">
              2. Instance method
            </Link>
            <Link className="alink" to="/callback">
              3. Callback Function
            </Link>
            <Link className="alink" to="/bubbling">
              4. Event Bubbling
            </Link>
            <Link className="alink" to="/parent">
              5. Parent Component
            </Link>
            <Link className="alink" to="/users">
              6. Observer Pattern
            </Link>
            <Link className="alink" to="/users">
              7. Global Variable
            </Link>
            <Link className="alink" to="/users">
              8. Context
            </Link>
          </nav>
          <div>
            <Route path="/props" exact>
              <PropsExample />
            </Route>
            <Route path="/instance" exact>
              <InstanceMethodExample />
            </Route>
            <Route path="/callback" exact>
              <CallbackExample />
            </Route>
            <Route path="/bubbling" exact>
              <BubblingExample />
            </Route>{' '}
            <Route path="/parent" exact>
              <ParentComponentExample />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
