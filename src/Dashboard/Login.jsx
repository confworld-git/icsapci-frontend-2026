import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toaster } from "evergreen-ui";
const Login = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  // async function fetchLogins() {
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_API_LINK}Login_ICSAP_CONFWORLD`
  //     );
  //     const logins = response.data;

  //     setData(logins);
  //   } catch (error) {
  //     console.error("Error fetching logins:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchLogins();
  // }, []);

  // const HandleLoginFunction = (e) => {
  //   e.preventDefault();
  //   if (
  //     Email === Data.logins[0].Email &&
  //     Password === Data.logins[0].Password
  //   ) {
  //     localStorage.setItem("Login-ICSAP", import.meta.env.VITE_LOG_PASS);
  //     navigate(`/${import.meta.env.VITE_NAVIGATION_LINK}`);
  //   }
  // };

  const HandleDashboard = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}Logins/Admin/Registrations`
      );

      const admin = response.data.find(
        (admin) => admin.Email === Email && admin.Password === Password
      );

      if (admin) {
        localStorage.setItem(
          "ICSAP_LOGIN",
          import.meta.env.VITE_NAVIGATION_LINK
        );
        navigate(`/${import.meta.env.VITE_NAVIGATION_LINK}`);
      } else {
        toaster.warning("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error fetching admin registrations:", error);
      toaster.danger("Failed to fetch registration data. Please try again.");
    }
  };

  return (
    <div className="login">
      <div>
        <h1>Login</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={HandleDashboard}>Login Now</button>
      </div>
    </div>
  );
};

export default Login;
