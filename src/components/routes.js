import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Accidents from './Doctorspecificscreen/Accidents';
import DrBloodDonation from './Doctorspecificscreen/BloodDonation';
import DrBloodrequests from './Doctorspecificscreen/DrBloodRequests';
import AccidentDetection from './Features/AccidentDetection';
import BloodDonation from './Features/BloodDonation';
import FetchDonors from "./Features/FetchDonors";
import FetchRequest from './Features/Fetchrequest';
import Doctorheader from './RegisterasDoctor/Doctorheader';
import DoctorLogin from './RegisterasDoctor/DoctorLogin';
import DoctorRegister from './RegisterasDoctor/DoctorRegister';
import Login from './RegisterasUser/Login';
import Register from './RegisterasUser/Register';
import Authpage from './Screens/Authpage';
import Dashboard from './Screens/Dashboard';
import Doctorpage from './Screens/Doctorpage';
import Header from './Screens/Header'; // Regular header for all pages except doctor
import LandingPage from './Screens/landingpage';


function RoutesOfThePage() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Home and common header */}
                    <Route path='/Landingpage' element={<><Header /><LandingPage /></>} />
                    <Route path='/' element={<><Header /><Authpage /></>} />

                    {/* Auth routes */}
                    <Route path="/login-as-user" element={<><Header /><Login /></>} />
                    <Route path="/register-as-user" element={<><Header /><Register /></>} />
                    <Route path="/login-as-doctor" element={<><Header /><DoctorLogin /></>} />
                    <Route path="/register-as-doctor" element={<><Header /><DoctorRegister /></>} />

                    {/* User routes */}
                    <Route path="/dashboard" element={<><Header /><Dashboard /></>} />
                    <Route path="/blood-donation" element={<><Header /><BloodDonation /></>} />
                    <Route path="/blood-donation-check" element={<><Header /><FetchDonors /></>} />

                    <Route path="/accident-detection" element={<><Header /><AccidentDetection /></>} />
                    <Route path='/blood-request-check' element={<><Header /><FetchRequest /></>} />

                    {/* Doctor page routes */}
                    <Route path='/blood-donations-dr-page' element={<><Doctorheader /><DrBloodDonation /></>} />
                    <Route path='/blood-requests-dr-page' element={<><Doctorheader /><DrBloodrequests /></>} />
                    <Route path='/accident-dr-page' element={<><Doctorheader /><Accidents /></>} />

                    {/* Doctor page with its specific header */}
                    <Route
                        path='/doctor-screen'
                        element={
                            <>
                                <Doctorheader /> {/* Render the DoctorHeader only for the doctor page */}
                                <div className="container mt-4">
                                    <Doctorpage />
                                </div>
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default RoutesOfThePage;
