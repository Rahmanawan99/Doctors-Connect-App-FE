import { Route, Routes } from "react-router-dom";
import Signup from "../Components/signup/Signup";
import Login from "../Components/login/Login";
import Disease from "../Components/diseases/Disease";
import Patients from "../Components/Patients/Patients";
import SpecialistDoctors from "../Components/SpecialistDoctors/SpecialistDoctos";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import AllDoctors from "../Components/Admin/AllDoctors";
import DoctorsDetails from "../Components/Admin/DoctorDetails";
import AllPatients from "../Components/Admin/AllPatients";
import PatientDetails from "../Components/Admin/PatientDetails";
import { SignupForPatient } from "../Components/PatientSignup/signupForPatients";
import { ProblemForm } from "../Components/Problems/ProblemForm";
import { DoctorDashboard } from "../Components/doctors-dashboard/doctorDashboard";

const Layout = () => {
  return (
    <Routes>
      <Route path="/signup-doctor" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/disease" element={<Disease />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/specialist-doctors" element={<SpecialistDoctors />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/all-doctors" element={<AllDoctors />} />
      <Route path="/doctor-details" element={<DoctorsDetails />} />
      <Route path="/all-patients" element={<AllPatients />} />
      <Route path="/patient-details" element={<PatientDetails />} />
      <Route path="/patient-sign-up" element={<SignupForPatient />}></Route>
      <Route path="/problem" element={<ProblemForm />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
    </Routes>
  );
};

export default Layout;
