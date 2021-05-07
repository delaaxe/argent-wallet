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
      <main>
        <Switch>
          <Route exact path="/argent-wallet">
            <p>Please search for a wallet</p>
          </Route>
          <Route path="/argent-wallet/:address">
            <Wallet />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);
