import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormComponent from "./FormComponent";
import Cookies from "js-cookie";
import axios from "axios";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const navigate = useNavigate();

  //Handlers
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setFormData({username: "", password: ""});
  };

  const handleLogin = async() => {
    try {
        const response = await axios.post("http://localhost:3000/login", formData);
        setPostResponse(response.data.message);
        if(response.status === 201) {
            Cookies.set("jwt-auth", response.data.token);
            navigate("/contacts");
        }
    } catch (error) {
        console.log(error?.response?.message || "Login Failed");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>{postResponse}</p>
      <FormComponent
        formData={formData}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <Link to="/register">Register a New User</Link>
    </div>
  );
}