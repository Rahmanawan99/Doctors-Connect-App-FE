import React from "react";
import { useEffect, useContext } from "react";
import { AppContext } from "../Context";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const AdminDashboard = () => {
  const { user } = useContext(AppContext);
  const [patientsCount, setPatientsCount] = React.useState(0);
  const [doctorsCount, setDoctorsCount] = React.useState(0);
  const [diseasesCount, setDiseasesCount] = React.useState(0);

  const Navigator = useNavigate();
  useEffect(() => {
    if (user === null) {
      Navigator("/admin");
    }

    axios.get("http://localhost:3002/get-doctors-counts").then((resp) => {
      if (resp.data.status === "success") {
        setDoctorsCount(resp.data.data.totalDoctors);
      }
    });
    axios.get("http://localhost:3002/get-patients-counts").then((resp) => {
      if (resp.data.status === "success") {
        setPatientsCount(resp.data.data.totalPatients);
      }
    });
    axios.get("http://localhost:3002/get-diseases-counts").then((resp) => {
      if (resp.data.status === "success") {
        setDiseasesCount(resp.data.data.totalDiseases);
      }
    });
  }, []);

  return (
    <div>
      <navbar className="navbar navbar-expand-lg navbar-light bg-light navbar-dark-green">
        <a className="navbar-brand text-white" href="#">
          Admin Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/admin-dashboard">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/all-doctors">
                All Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/all-patients">
                All Patients
              </Link>
            </li>
          </ul>
        </div>
      </navbar>
      <div className="container ">
        <h1 className="display-4 text-center my-3">Analytics</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="my-card text-center">
              <div className="text-white">
                <h3>Total Patients</h3>
                <h5 className="display-3">{patientsCount}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-card text-center">
              <div className="text-white">
                <h3>Total Doctors</h3>
                <h5 className="display-3">{doctorsCount}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-card text-center">
              <div className="text-white">
                <h3>Total Diseases</h3>
                <h5 className="display-3">{diseasesCount}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
