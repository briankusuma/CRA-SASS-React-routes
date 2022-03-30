import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

//page to route
import Home from './_page/home';


function App() {
  return (
    <>
        <Router>
						<div>
							<Routes>
								<Route path="/home" element={<Home />} />
							</Routes>
						</div>
				</Router>
    </>
  );
}

export default App;

// react-roter or routing happen in here