import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarSearch from "./pages/CarSearch";
import CarDetail from "./pages/CarDetail";
import NotFound from "./pages/NotFound";
import DateFeature from "./components/DateFeature";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/car" element={<CarSearch />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="date" element={<DateFeature />} />
        <Route path="payment" element={<Payment />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
