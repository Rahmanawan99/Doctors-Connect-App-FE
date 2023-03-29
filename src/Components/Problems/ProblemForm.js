import Navbar from "../Navbar/Navbar";
import "./problem.css";
import doctorPng from "./doctor.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const ProblemForm = () => {
  const [formValues, setFormValues] = useState({});
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/doctors").then((res) => {
      setDoctors(res.data.data);
    });
  }, []);

  return (
    <div className="problem-form">
      <Navbar />
      <div className="f-container">
        <div>
          <img src={doctorPng} style={{ width: "80%" }} />
        </div>
        <div className="right">
          <h1>Ask Your Problem's Solution With Best Doctors</h1>
          <form
            className="f-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (
                !formValues.email ||
                !formValues.name ||
                !formValues.phoneNo ||
                !formValues.askWithEmail ||
                !formValues.problem
              ) {
                alert("Please fill out the mandatory fields");
              } else {
                axios
                  .post("http://localhost:3002/patient/problem", formValues)
                  .then((res) => {
                    if (res.data.status === "success") {
                      Swal.fire({
                        title: "Success",
                        icon: "success",
                        text: "Your Problem Submitted Successfully, doctor will contact you soon!",
                      });
                    }
                  });
              }
            }}
          >
            <div className="f-field">
              <label>Your Name*</label>
              <input
                type="text"
                className="f-field-input"
                name="name"
                value={formValues["name"] || ""}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="f-field">
              <label>Your Email*</label>
              <input
                type="text"
                className="f-field-input"
                name="email"
                value={formValues["email"] || ""}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="f-field">
              <label>Your Phone No.*</label>
              <input
                type="text"
                className="f-field-input"
                name="phoneNo"
                value={formValues["phoneNo"] || ""}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="f-field">
              <label>Which doctor do you want to ask for your problem?</label>
              <select
                className="f-field-input"
                name="askWithEmail"
                value={formValues["askWithEmail"] || ""}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <option value={null}>Select</option>
                {doctors.length > 0 &&
                  doctors.map((doctor) => {
                    return (
                      <option value={doctor.email}>{doctor.doctorName}</option>
                    );
                  })}
              </select>
            </div>
            <div className="f-field">
              <label>Type Your Problem*</label>
              <textarea
                className="f-field-input"
                style={{ width: "100%", Height: "400px" }}
                name="problem"
                value={formValues["problem"] || ""}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="f-field">
              <button className="f-field-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
