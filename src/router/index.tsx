import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TestimonyBlock from "../components/TestimonyBlock";
import TestimonialContent from "../content/TestimonialContent.json";

import routes from "./config";
import { Styles } from "../styles/styles";



const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          if (routeItem.component === "Linkedin")
          {
            return (
              <Route path={routeItem.path} exact={routeItem.exact} component={() => {
                window.location.href = 'https://www.linkedin.com/company/augure-io/';
                return null;
            }}/>
            );
          } else {
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={lazy(() => import(`../pages/${routeItem.component}`))}
              />
            );
          }          
        })}
      </Switch>
      <TestimonyBlock
        title={TestimonialContent.title}
        content={TestimonialContent.text}
        elements={TestimonialContent.elements}
        id={TestimonialContent.id}
      />
      <Footer />
    </Suspense>
  );
};

export default Router;
