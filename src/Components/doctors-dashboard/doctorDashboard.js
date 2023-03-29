import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./doctorDashboard.css";

export const DoctorDashboard = () => {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    const doctorDetails = JSON.parse(localStorage.getItem("userDetails"));
    axios
      .get(
        `http://localhost:3002/doctor/problems?doctorEmail=${doctorDetails.email}`
      )
      .then((res) => {
        setProblems(res.data.data);
      });
  }, []);
  return (
    <div>
      <div className="f-doctor-dashboard-container">
        <h1 className="f-doctor-heading">Patient Problems</h1>

        <table>
          <tr>
            <th>Patient Name</th>
            <th>Phone No.</th>
            <th>Problem</th>
          </tr>
          {problems.map((problem) => {
            return (
              <tr>
                <td>{problem.name}</td>
                <td>{problem.phoneNo}</td>
                <td>{problem.problem}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
