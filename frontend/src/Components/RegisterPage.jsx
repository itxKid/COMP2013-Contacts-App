import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormComponent from "./FormComponent";
import Cookies from "js-cookie";
import axios from "axios";

export default function RegisterPage() {
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
    handleRegister();
    setFormData({username: "", password: ""});
  };

  const handleRegister = async() => {
    try {
        const response = await axios.post("http://localhost:3000/register", formData);
        setPostResponse(response.data.message);
        if(response.status === 201) {
            navigate("/");
        }
    }catch (error) {
        console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Register Page</h1>
      <p>{postResponse}</p>
      <FormComponent
        formData={formData}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <Link to="/">Back to Login</Link>
    </div>
  );
}