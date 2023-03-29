import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allDoctors, setDoctors] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState({});
  const [allPatients, setPatients] = useState([]);
  const [patientDetails, setPatientDetails] = useState({});
  return (
    <AppContext.Provider
      value={{
        user,
        handleSetUser: setUser,
        allDoctors,
        handleSetDoctors: setDoctors,
        doctorDetails,
        handleSetDoctorDetails: setDoctorDetails,
        allPatients,
        handleSetPatients: setPatients,
        patientDetails,
        handleSetPatientDetails: setPatientDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
