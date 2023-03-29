import { useContext } from "react";
import { AppContext } from "../Context";
import "./Doctors.css";

const SpecialistDoctors = () => {
  const { allDoctors } = useContext(AppContext);
  return (
    <div
      style={{
        backgroundColor: "white",
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <h1 className="sectionHeading">
        All Doctors Of Your Diseases, Consult with right Doctors
      </h1>
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Specialist</th>
            <th scope="col">Designation</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Hospital Name</th>
          </tr>
        </thead>
        <tbody>
          {allDoctors.map((item, key) => {
            return (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{item.doctorName}</td>
                <td>{item.specialization}</td>
                <td>{item.designation}</td>
                <td>{item.phoneNo}</td>
                <td>{item.hospitalName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpecialistDoctors;
