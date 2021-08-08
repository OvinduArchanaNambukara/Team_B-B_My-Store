import React, {lazy, Suspense} from "react";
import {Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import Loading from "../loading/Loading";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import AdminNav from "./AdminNav";
import AddProducts from "./products/AddProducts";

const AdminDashboard = lazy(() => import("./dashboard/AdminDashboard"));
const AdminProducts = lazy(() => import("./products/AdminProducts"));
const AdminOrders = lazy(() => import("./orders/AdminOrders"));


const ProductRoutes: React.FC = () => {
  let location = useLocation();
  let {path} = useRouteMatch();

  return (
    <React.Fragment>
      <AdminNav/>
      <TransitionGroup>
        <CSSTransition classNames='page' timeout={1000} key={location.pathname}>
          <Suspense fallback={<Loading/>}>
            <Switch location={location}>
              <Route path={`${path}/add-product`}>
                <AddProducts/>
              </Route>
              <Route path={`${path}/products`}>
                <AdminProducts/>
              </Route>
              <Route path={`${path}/orders`}>
                <AdminOrders/>
              </Route>
              <Route path={`${path}`}>
                <AdminDashboard/>
              </Route>
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
}

export default ProductRoutes;
