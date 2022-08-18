import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {ListTripsPage} from "../pages/ListTripsPage"
import {ApplicationFormPage} from "../pages/ApplicationFormPage";
import {AdminHomePage} from "../pages/AdminHomePage";
import {LoginPage} from "../pages/LoginPage";
import {CreateTripPage} from "../pages/CreateTripPage";
import {TripDetailsPage} from "../pages/TripDetailsPage"

export function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/ListTrips" element={<ListTripsPage/>}/>
          <Route path="/ApplicationForm" element={<ApplicationFormPage/>}/>
          <Route path="/AdminHome" element={<AdminHomePage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/CreateTrip" element={<CreateTripPage/>}/>
          <Route path="/TripDetails" element={<TripDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
