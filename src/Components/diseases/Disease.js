import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Disease.css";
import { AppContext } from "../Context";
import { useNavigate } from "react-router-dom";
const Disease = () => {
  const [disease, setDisease] = useState([]);
  const Navigate = useNavigate();

  const { handleSetDoctors, user } = useContext(AppContext);
  function getDisease(e) {
    axios
      .get(`http://localhost:3002/get-specialist/${e.target.value}`)
      .then((resp) => {
        console.log(resp.data);
        handleSetDoctors(resp.data.data);
        Navigate("/specialist-doctors");
      });
  }
  useEffect(() => {
    axios.get("http://localhost:3002/diseases").then((resp) => {
      setDisease(resp.data.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12">
            <h1 className="text-center mt-3">Select Disease </h1>
          </div>
        </div>
        <div className="row  mt-5 ml-5 mx-auto">
          {disease.map((item) => {
            return (
              <div className="col-lg-4 mt-3">
                <button
                  onClick={getDisease}
                  value={item.diseaseName}
                  className="btn "
                >
                  {item.diseaseName}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Disease;
