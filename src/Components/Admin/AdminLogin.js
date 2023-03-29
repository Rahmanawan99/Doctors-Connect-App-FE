import "./AdminLogin.css";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";

const AdminLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const Navigator = useNavigate();
  const { handleSetUser } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    if (data.email === "admin@gmail.com" && data.password === "admin@123") {
      Swal.fire({
        title: "Success",
        text: "Login Successful",
        icon: "success",
      }).then(() => {
        handleSetUser({
          isAdmin: true,
          isLoggedIn: true,
        });
        Navigator("/admin-dashboard");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials!",
      });
    }
  };
  return (
    <div>
      <form id="admin-form">
        <h1 id="form-heading">Login Your Account</h1>
        <p className="form-text">Only admins can logged in into this portal.</p>
        <div className="form-group">
          <label htmlFor="username" className="field-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="field-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="">
          <button
            type="submit"
            name=""
            onClick={handleSubmit}
            class="btn-primary btn-lg btn-block"
            style={{ width: "100% !important" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
