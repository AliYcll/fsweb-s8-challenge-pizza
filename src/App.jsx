import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/order"
          render={() => <Order setOrderData={setOrderData} />}
        />
        <Route
          path="/success"
          render={() => <Success orderData={orderData} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
