import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../Context";
import axios from "axios";

const AllDoctors = () => {
  const Navigator = useNavigate();
  const {
    user,
    allDoctors,
    handleSetDoctors,
    doctorDetails,
    handleSetDoctorDetails,
  } = useContext(AppContext);
  useEffect(() => {
    if (user === null) {
      Navigator("/admin");
    }

    axios.get("http://localhost:3002/doctors").then((resp) => {
      handleSetDoctors(resp.data.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/doctors/${id}`).then((resp) => {
      if (resp.data.status === "success") {
        axios.get("http://localhost:3002/doctors").then((resp) => {
          handleSetDoctors(resp.data.data);
        });
      }
    });
  };

  const handleViewDetails = (id) => {
    axios.get(`http://localhost:3002/doctors/${id}`).then((resp) => {
      handleSetDoctorDetails(resp.data.data[0]);
      Navigator("/doctor-details");
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
            <li className="nav-item active">
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
      <table className="table container my-4 bg-light">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Speclization</th>
            <th scope="col">Designation</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Hospital Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allDoctors.map((item, key) => {
            return (
              <tr key={key}>
                <th scope="row">{item.id}</th>
                <td>{item.doctorName}</td>
                <td>{item.specialization}</td>
                <td>{item.designation}</td>
                <td>{item.phoneNo}</td>
                <td>{item.hospitalName}</td>
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

export default AllDoctors;
