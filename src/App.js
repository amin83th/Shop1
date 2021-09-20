import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Header from "./element/Header";
import Footer from "./element/Footer";
import Add from "./pages/Add";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Gallery">
          <Gallery />
        </Route>
        <Route path="/Favorite">
          <Favorite />
        </Route>
        <Route path="/Basket">
          <Basket />
        </Route>
        <Route path="/Add">
          <Add />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
