import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazily load the component
const Reservation = React.lazy(() => import("./pages/Reservation/Reservation"));
const Reference = React.lazy(() => import("./pages/Reference/Reference"));
const Login = React.lazy(() => import("./pages/Login/Login"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reservation/:reservation/pin/:pin" element={<Reservation />} />
          <Route path="/rid/:rid/pin/:pin" element={<Reference />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
