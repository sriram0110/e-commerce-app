import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import CartList from "./containers/CartList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductListing />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
          <Route path="/cartlist">
            <CartList />
          </Route>
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
