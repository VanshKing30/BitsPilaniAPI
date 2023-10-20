import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collegeName: "",
    accountType: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    const apiUrl = `${process.env.REACT_APP_BASE_URL}/signup`;

    axios.post(apiUrl , formData)
    .then((response)=>{
      console.log("Response" , response.data);
      toast.success("Account Created succesfully");
      navigate("/home");
    })
    .catch((error)=>{
      console.error("Error:" , error);
      toast.error("Failed To craete account");
    });

    
  }

  return (
    <div className="h-screen md:flex">

    <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">

      <div>
        <h1 className="text-white font-bold text-4xl font-sans">Foodies</h1>
        <p className="text-white mt-1">Your go-to platform for delicious meals and snacks</p>
        <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">
          Explore
        </button>
      </div>
      
      <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

    </div>

    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">

      <form className="bg-white p-8 rounded shadow-lg w-80" onSubmit={submitHandler}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello There!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Create an Account</p>

          <div className="mb-4">
            <input
              required
              className="w-full py-2 px-3 border border-gray-300 rounded-2xl"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-4">
          <input
              required
              className="w-full py-2 px-3 border border-gray-300 rounded-2xl"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-4">
            <input
              required
              className="w-full py-2 px-3 border border-gray-300 rounded-2xl"
              type="text"
              placeholder="College Name"
              name="collegeName"
              value={formData.collegeName}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-4">
              <select
                required
                name="accountType"
                onChange={changeHandler}
                value={formData.accountType}
                className="mt-1 p-2 w-full border rounded-2xl"
              >
                <option value="" disabled selected hidden>Login as</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
          </div>

          <div className="relative mb-4">
            <input
              required
              className="w-full py-2 px-3 border border-gray-300 rounded-2xl"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>


          <button type="submit" className="w-full bg-indigo-600 py-2 rounded-2xl text-white font-semibold mb-2">
            Signup
          </button>          
            
        </form>
      </div>
    </div>
  );
}

export default Signup;







