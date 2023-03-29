import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context";
import axios from "axios";
import Swal from "sweetalert2";
const DoctorsDetails = () => {
  const { doctorDetails, handleSetDoctors } = useContext(AppContext);
  const Navigator = useNavigate();
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/doctors/${id}`).then((resp) => {
      if (resp.data.status === "success") {
        axios.get("http://localhost:3002/doctors").then((resp) => {
          handleSetDoctors(resp.data.data);
          Navigator("/all-doctors");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Doctor Deleted Successfully",
          });
        });
      }
    });
  };
  return (
    <div>
      <navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
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
              <Link className="nav-link" to="/admin-dashboard">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-doctors">
                All Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                All Patients
              </Link>
            </li>
          </ul>
        </div>
      </navbar>
      <div className="container bg-light my-3">
        <h1 className="display-4 text-center text-dark">Doctor Details</h1>
        <h3 className="text-dark font-weight-normal">
          Name: {doctorDetails.doctorName}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Email: {doctorDetails.email}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Phone: {doctorDetails.phoneNo}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Age: {doctorDetails.age}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Country: {doctorDetails.country}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Gender: {doctorDetails.gender}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Address: {doctorDetails.address}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Designation: {doctorDetails.designation}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Salary: {doctorDetails.salary}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Education: {doctorDetails.education}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Hospital Name: {doctorDetails.hospitalName}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Specialization: {doctorDetails.Specialization}
        </h3>
        <h3 className="text-dark font-weight-normal">
          Registered On: {new Date(doctorDetails.reg_date).toDateString()}
        </h3>
        <div className="actions-btn ">
          <button
            type="button"
            class="btn-primary my-3 mr-3"
            style={{ padding: "10px", borderRadius: "5px", width: "100px" }}
            onClick={() => Navigator("/all-doctors")}
          >
            Back
          </button>
          <button
            type="button"
            class="btn-primary my-3"
            style={{ padding: "10px", borderRadius: "5px", width: "100px" }}
            onClick={() => handleDelete(doctorDetails.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDetails;
