import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/estate.css";

// WEBSITES
import Homepage from "./Pages/Website/Home";
import AboutUs from "./Pages/Website/AboutUs";

// RESIDENT
import ResidentComplain from "./Pages/Residents/ResidentComplain";
import ResidentTransaction from "./Pages/Residents/Transaction";
import ResidentActivityLog from "./Pages/Residents/ActivityLog";
import Residents from "./Pages/Residents/Residence";
import ResidentsOverview from "./Pages/Residents/Dashboard";
import Redirect from "./Pages/Residents/RedirectHome";
import RedirectSettings from "./Pages/Settings/Residence";
// ==========

// EXTERNAL
import ExternalComplain from "./Pages/External/ExternalComplaint";
// import ResidentTransaction from "./Pages/Residents/Transaction";
import ExternalActivityLog from "./Pages/External/ExternalActivityLog";
// import Residents from "./Pages/Residents/Residence";
import ExternalDashboard from "./Pages/External/ExternalDashboard";
import GrantAccess from "./Pages/External/VerifyUser";
import ExternalSettings from "./Pages/Settings/External";
// ==========

import ChooseMode from "./Pages/Authentication/ChooseMode";
import Login from "./components/Login";
import JoinEstate from "./Pages/Authentication/JoinEstate";
import CreateEstate from "./Pages/Authentication/CreateEstate";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  return (
    !loading && (
      <>
        <BrowserRouter basename="/">
          <Routes>
            {/* AUTHENTICATION */}
            <Route path="/get-started" element={<ChooseMode />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-estate" element={<CreateEstate />} />
            <Route path="/join-estate" element={<JoinEstate />} />
            {/* <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/update-password" element={<UpdatePassword />} /> */}

            {/* EXTERNAL */}
            <Route path="/external" element={<ExternalDashboard />} />
            <Route path="/external/settings" element={<ExternalSettings />} />
            <Route path="/verify/user" element={<GrantAccess />} />
            <Route path="/external/complaint" element={<ExternalComplain />} />

            <Route
              path="/external/activitylog"
              element={<ExternalActivityLog />}
            />

            {/* Website*/}
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path="/about" element={<AboutUs />} /> */}

            {/* RESIDENT */}
            <Route index element={<Homepage />} />
            <Route path="/overview" element={<ResidentsOverview />} />
            <Route path="/residence/settings" element={<RedirectSettings />} />
            <Route path="/redirect=token" element={<Redirect />} />
            <Route path="/resident/complaint" element={<ResidentComplain />} />
            <Route path="/resident/residence" element={<Residents />} />
            <Route
              path="/resident/activitylog"
              element={<ResidentActivityLog />}
            />
            <Route
              path="/resident/transaction"
              element={<ResidentTransaction />}
            />
          </Routes>
        </BrowserRouter>
      </>
    )
  );
}

export default App;
