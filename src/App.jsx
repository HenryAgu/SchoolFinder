import { useState } from "react";

// stylesheet
import "./App.css";

// react routers
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignInContext } from "./Contexts/SignInContext";

// components
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import SearchPage from "./pages/SearchPage/SearchPage";
import SchoolProfile from "./pages/SchoolProfile/SchoolProfile";
import SchoolDashboardLayout from "./pages/SchoolDashboardLayout/SchoolDashboardLayout";
import SchoolProfileDash from "./pages/SchoolDashboardLayout/pages/SchoolProfileDash";
import SchoolStatistics from "./pages/SchoolDashboardLayout/pages/SchoolStatistics";
import SchoolSettings from "./pages/SchoolDashboardLayout/pages/SchoolSettings";

function App() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <main>
      <SignInContext.Provider
        value={{ openSignIn, setOpenSignIn, openSignUp, setOpenSignUp }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search_page" element={<SearchPage />} />
            <Route path="/school_profile" element={<SchoolProfile/>}/>
            <Route element={<SchoolDashboardLayout/>}>
              <Route path="/dashboard/school_profile/" element={<SchoolProfileDash/>}/>
              <Route path="/dashboard/statistics" element={<SchoolStatistics/>}/>
              <Route path="/dashboard/settings" element={<SchoolSettings/>}/>
            </Route>
         </Routes>
        </BrowserRouter>
      </SignInContext.Provider>
    </main>
  );
}

export default App;
