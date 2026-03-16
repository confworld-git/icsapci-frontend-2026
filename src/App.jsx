import React, { useEffect } from "react";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./About/About.jsx";
import Navbar from "./Home/Navbar.jsx";
import Publication from "./Publication/Publication.jsx";
import Footer from "./Home/Footer/Footer.jsx";
import Submission from "./Publication/Submission/Submission.jsx";
import Guidelines from "./Publication/Guidelines/Guidelines.jsx";
import Registration from "./Registration/Registration.jsx";
import Instructions from "./Instructions/Instructions.jsx";
import Terms from "./Terms/Terms.jsx";
import Venue from "./Venue/Venue.jsx";
import Partner from "./Partner/Partner.jsx";
import FAQ from "./FAQ/FAQ.JSX";
import Essential from "./Essential/Essential.jsx";
import Paper from "./Callforpaper/Paper.jsx";
import Organizer from "./Organizer/Organizer.jsx";
import Speaker from "./Speaker/Speaker.jsx";
import OCM from "./OCM/OCM.jsx";
import OCMform from "./OCM/OCMform.jsx";
import Enquiry from "./Partner/Enquiry.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Login from "./Dashboard/Login.jsx";
import Sponsors from './Sponsors/Sponsors.jsx'
import "aos/dist/aos.css";
import AOS from "aos";
import PaymentSuccess from "./Success.jsx";
import AdminHome from "./admin/home.jsx";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const noNavbarFooterRoutes = [
    "/",
    `/${import.meta.env.VITE_NAVIGATION_LINK}`,
    "/Login",
    "/Payment_Success",
    "/admin"
  ];

  const shouldHideNavbarFooter = noNavbarFooterRoutes.includes(
    location.pathname
  );

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}
      {children}
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={`${import.meta.env.VITE_NAVIGATION_LINK}`}
            element={<Dashboard />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Payment_Success" element={<PaymentSuccess />} />
          <Route path="/About" element={<About />} />
          <Route path="/About_Organizer" element={<Organizer />} />
          <Route path="/Speaker" element={<Speaker />} />
          <Route path="/Organizing_Committee_Members" element={<OCM />} />
          <Route
            path="/Organizing_Committee_Members_Form"
            element={<OCMform />}
          />
          <Route path="/Publication" element={<Publication />} />
          <Route path="/Sponsors" element={<Sponsors/>} />
          <Route path="/Submission_Form" element={<Submission />} />
          <Route path="/Submission_Guidelines" element={<Guidelines />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Venue" element={<Venue />} />
          <Route path="/Contact_Us" element={<Partner />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Essential" element={<Essential />} />
          <Route path="/Enquiry" element={<Enquiry />} />
          <Route path="/Call_for_Papers" element={<Paper />} />
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
