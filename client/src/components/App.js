import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from "./views/landingPage";
function App() {
  return (
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          
        </Switch>
      </div>
  );
}

export default App;
