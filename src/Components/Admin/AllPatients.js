import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../Context";
import axios from "axios";

const AllPatients = () => {
  const Navigator = useNavigate();
  const {
    user,
    allDoctors,
    handleSetDoctors,
    doctorDetails,
    handleSetDoctorDetails,
    allPatients,
    handleSetPatientDetails,
    handleSetPatients,
  } = useContext(AppContext);
  useEffect(() => {
    if (user === null) {
      Navigator("/admin");
    }

    axios.get("http://localhost:3002/patients").then((resp) => {
      handleSetPatients(resp.data.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/patients/${id}`).then((resp) => {
      if (resp.data.status === "success") {
        axios.get("http://localhost:3002/doctors").then((resp) => {
          handleSetPatients(resp.data.data);
        });
      }
    });
  };

  const handleViewDetails = (id) => {
    axios.get(`http://localhost:3002/patients/${id}`).then((resp) => {
      handleSetPatientDetails(resp.data.data[0]);
      Navigator("/patient-details");
    });
  };
  return (
    <>
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
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin-dashboard">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/all-doctors">
                All Doctors
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="#">
                All Patients
              </Link>
            </li>
          </ul>
        </div>
      </navbar>
      <table className="table container my-4 bg-light">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Country</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allPatients.map((item, key) => {
            return (
              <tr key={key}>
                <th scope="row">{item.id}</th>
                <td>{item.patientName}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.phoneNo}</td>
                <td>{item.country}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary my-2"
                    onClick={() => {
                      handleViewDetails(item.id);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllPatients;
