import React from "react";
import {
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import Investment from "../pages/Investment";
import HowItWorks from "../pages/HowItWorks";

const Routes = (props) => {

  return (
      <Switch>
        <Route path="/" element={<Navigate to={"/home"} />}/>
        <Route path="/home" element={<Investment />}/>
        <Route path="/how-it-works" element={<HowItWorks />}/>
        <Route path="/contact" element={<HowItWorks />}/> 
        <Route path="*" element={<>Page Not Found 4O4 </>}/> {/* place a 4O4 page component. */}
      </Switch>
  );
};

export default Routes;
