import React, {lazy, Suspense} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Loading from "./components/loading/Loading";

const Welcome = lazy(() => import("./components/welcome/Welcome"));
const Checkout = lazy(() => import("./components/cart-table/Checkout"));
const SearchBar = lazy(() => import("./components/search-bar/SearchBar"));
const CategoryArea = lazy(() => import("./components/category-area/CategoryArea"));
const Products = lazy(() => import("./components/productUX/Products"));
const LogInUX = lazy(() => import("./components/log-in/LogInUX"));

const Routes: React.FC = () => {
  let location = useLocation();

  return (
      <TransitionGroup>
        <CSSTransition classNames='page' timeout={1000} key={location.key}>
          <Suspense fallback={<Loading/>}>
            <Switch location={location}>
              <Route path='/checkout'>
                <Checkout/>
              </Route>
              <Route path='/login'>
                <LogInUX/>
              </Route>
              <Route path='/'>
                <Welcome/>
                <SearchBar/>
                <CategoryArea/>
                <Products/>
              </Route>
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default Routes;
