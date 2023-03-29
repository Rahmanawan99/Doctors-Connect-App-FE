import React, { useState, useContext } from "react";
import "../signup/Signup.css";
import Swal from "sweetalert2";

import { AppContext } from "../Context";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleSetUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("patient");
  const [data, setdata] = useState([{ email: "", password: "" }]);
  const value = {
    email,
    password,
    role,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password !== "") {
      setdata([...data, value]);

      // setrole("");
      console.log(value);
      axios({
        method: "post",
        url: "http://localhost:3002/login",
        data: value,
      }).then((resp) => {
        console.log(resp.data);
        if (resp.data.status === "success") {
          handleSetUser(resp.data.data[0]);
          localStorage.setItem(
            "userDetails",
            JSON.stringify(resp.data.data[0])
          );
          if (!!resp.data.data[0].doctorName) {
            navigate("/doctor-dashboard");
          } else {
            navigate("/disease");
          }
          setemail("");
          setpassword("");
        } else if (resp.data.status === "error") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Credentials!",
          });
        }
      });
    } else {
      alert("Fill Out The Missing Fields");
    }
  };

  return (
    <>
      <Navbar />
      <form className="mx-auto w-50 frm mt-5 h-75 ">
        <div className="row">
          <div className="col-lg-12  ">
            <div className="head-sec mt-0 pt-0 ">
              <h1>Login Here</h1>
              <p className="pt-3 para text-white">
                Login To see The Appountments
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 w-75 ml-5">
            <label>Email</label>
            <br />
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="email"
            />
            <br />
            <label className="mt-3">Password</label>
            <br />
            <input
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
              type="password"
            />
            <br />
            <br />
            <label>Role </label> <br />{" "}
            <select
              onChange={(e) => {
                setrole(e.target.value);
              }}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
            <button onClick={handleSubmit} className="mt-5 btn">
              Login
            </button>
            <br></br>
          </div>
          <br />
        </div>
      </form>

      <br />
    </>
  );
};
export default Login;
