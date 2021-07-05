import React, {Suspense, lazy} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {Container} from "react-bootstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Loading from "./components/loading/Loading";

const Welcome = lazy(() => import("./components/welcome/Welcome"));
const Checkout = lazy(() => import("./components/cart-table/Checkout"));
const SearchBar = lazy(() => import("./components/search-bar/SearchBar"));
const CategoryArea = lazy(() => import("./components/category-area/CategoryArea"));
const Products = lazy(() => import("./components/productUX/Products"));

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
            <Route path='/'>
              <Container fluid={true}>
                <Welcome/>
                <SearchBar/>
              </Container>
              <Container>
                <CategoryArea/>
                <Products/>
              </Container>
            </Route>
          </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default Routes;
