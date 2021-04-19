import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GithubCommitHome from '../src/GithubCommit/GithubCommitHome';
import GithubCommitDetails from '../src/GithubCommit/GithubCommitDetails';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <GithubCommitHome />
          </Route>
          <Route path="/commitDetails/:commitId">
            <GithubCommitDetails />
          </Route>
        </Switch>
    </Router>
  );
}