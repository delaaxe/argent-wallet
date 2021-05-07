import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Wallet } from "./Wallet";
import { Header } from "./Header";
import "./App.css";

export const App = () => (
  <Router>
    <div className="App">
          <Header />
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <p>Please search for a wallet</p>
          </Route>
          <Route path="/:address">
            <Wallet />
          </Route>
        </Switch>
      </header>
    </div>
  </Router>
);
