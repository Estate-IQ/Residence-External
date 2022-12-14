import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/estate.css";

// AUTH
import ChooseMode from "./Pages/Authentication/ChooseMode";
import Login from "./components/Login";
import Test from "./Test/UseCase";
import JoinEstate from "./Pages/Authentication/JoinEstate";
import CreateEstate from "./Pages/Authentication/CreateEstate";
// Messages
import AdMessage from "./Pages/Messages/Frontend/AdMessage";
import SuperMessage from "./Pages/Messages/Frontend/SuperAdminChats";
import ResidentMessage from "./Pages/Messages/Frontend/Residence";
import ExternalMessage from "./Pages/Messages/Frontend/External";

// WEBSITES
import Homepage from "./Pages/Website/Home";
import AboutUs from "./Pages/Website/AboutUs";
import ContactUs from "./Pages/Website/Contact";

// RESIDENT
import ResidentComplain from "./Pages/Residents/ResidentComplain";
import ResidentTransaction from "./Pages/Residents/Transaction";
import ResidentActivityLog from "./Pages/Residents/ActivityLog";
import Payment from "./Pages/Residents/Payment";
import Residents from "./Pages/Residents/Residents";
import ResidentsOverview from "./Pages/Residents/Dashboard";
import Redirect from "./Pages/Residents/RedirectHome";
import RedirectSettings from "./Pages/Settings/Residents";

// EXTERNAL
import ExternalComplain from "./Pages/External/ExternalComplaint";
import ExternalActivityLog from "./Pages/External/ExternalActivityLog";
import ExternalDashboard from "./Pages/External/ExternalDashboard";
import GrantAccess from "./Pages/External/VerifyUser";
import ExternalSettings from "./Pages/Settings/External";

// ADMIN
import AdminOverview from "./Pages/Admin/A-Overview";
import AdminResidents from "./Pages/Admin/Residents";
import AdminUtilities from "./Pages/Admin/Utilities";
import AdminTransaction from "./Pages/Admin/AdminTransaction";
import AdminActivityLog from "./Pages/Admin/Activity";
import AdminComplaint from "./Pages/Admin/AdminComplains";
import AdminSettings from "./Pages/Settings/Admin";
// ===================

// SUPERADMIN
import EstateProfile from "./components/Profile";
import EditPackage from "./Pages/SuperAdmin/Permissions/Edit";
import SuperAdminSettings from "./Pages/Settings/SuperAdmin";
import SuperAdminOverview from "./Pages/SuperAdmin/S-Overview";
import SuperActivityLog from "./Pages/SuperAdmin/Estates/ActivityLog";
import SuperAdminEstate from "./Pages/SuperAdmin/Estates/Estate";
import SuperAdminTask from "./Pages/SuperAdmin/Tasks/Task";
import SuperAdminPermission from "./Pages/SuperAdmin/Permissions/Permission";
// import SuperAdminComplaint from "./Pages/SuperAdmin/Complaints/Complaint";
import SuperAdminComplaint from "./Pages/SuperAdmin/Complaints/SuperAdminComplaint";
import InvoiceDownloader from "./components/InvoicesDownload";

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
            {/* Website*/}
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/test" element={<Test />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/about" element={<AboutUs />} /> */}

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

            {/* RESIDENT */}
            <Route path="/Residents" element={<ResidentsOverview />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/Residents/settings" element={<RedirectSettings />} />
            <Route path="/redirect=token" element={<Redirect />} />
            <Route path="/resident/complaint" element={<ResidentComplain />} />
            <Route path="/resident/Residents" element={<Residents />} />
            <Route
              path="/resident/activitylog"
              element={<ResidentActivityLog />}
            />
            <Route
              path="/resident/transaction"
              element={<ResidentTransaction />}
            />

            {/* ADMIN */}
            <Route exact path="/admin" element={<AdminOverview />} />
            <Route exact path="/admin/settings" element={<AdminSettings />} />
            <Route path="/admin/household" element={<AdminResidents />} />
            <Route path="/admin/activitylog" element={<AdminActivityLog />} />
            <Route path="/admin/utilities" element={<AdminUtilities />} />
            <Route path="/admin/transaction" element={<AdminTransaction />} />
            <Route path="/admin/complaint" element={<AdminComplaint />} />

            {/* SUPERADMIN */}
            <Route path="/superadmin" element={<SuperAdminOverview />} />
            <Route
              path="/superadmin/settings"
              element={<SuperAdminSettings />}
            />
            <Route path="/superadmin/estate" element={<SuperAdminEstate />} />
            <Route
              path="/superadmin/activitylog"
              element={<SuperActivityLog />}
            />
            <Route path="/superadmin/tasks" element={<SuperAdminTask />} />
            <Route
              path="/superadmin/permission"
              element={<SuperAdminPermission />}
            />
            <Route
              path="/superadmin/complaint"
              element={<SuperAdminComplaint />}
            />

            {/* SLUGS */}
            <Route path="/profile" element={<EstateProfile />} />
            <Route path="/editpackage" element={<EditPackage />} />

            {/* MESSAGES */}
            <Route path="/a-messages" element={<AdMessage />} />
            <Route path="/s-messages" element={<SuperMessage />} />
            <Route path="/r-messages" element={<ResidentMessage />} />
            <Route path="/e-messages" element={<ExternalMessage />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  );
}

export default App;
