//render out home in here
//routing in here
import React from 'react';
import Home from "./Home"; 
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

//browserrouter allows routes to work
//routes renders the path 
import {
  Route, 
  Routes,
  useLocation
} from 'react-router-dom';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes Location = {location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
    </AnimatePresence>
  );
}

export default Pages;