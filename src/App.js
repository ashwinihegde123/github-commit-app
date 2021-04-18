import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GithubCommitHome from '../src/GithubCommit/GithubCommitHome';
import GithubCommitDetails from '../src/GithubCommit/GithubCommitDetails';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

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