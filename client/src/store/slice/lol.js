import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginimage from "./assests/register.svg";
import companylogo from './assests/RURUTEK_Logo_Original.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loginpasswordType, setLoginPasswordType] = useState("password");
  const [passwordLoginInput, setLoginPasswordInput] = useState("");
  const [values, setValues] = useState({
    username: '',
    empid: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`'{apiUrl}'/register`, values).then(res => {
      console.log(res.data.Status);
      if (res.data.Status === 'success') {
        navigate('/login')
      } else {
        alert('Error');
      }
    }).catch(err => { console.error(err) });
  }
  
  const tooglePass = () => {
    if (loginpasswordType === "password") setLoginPasswordType("text")
    else setLoginPasswordType("password")
  }

  const handlePasswordChange = (e) => {
    setLoginPasswordInput(e.target.value);
    setValues({ ...values, password: e.target.value });
  }

  return (
    <div className="flex justify-center items-center h-screen text-slate-600 text-sm">
      <div className="bg-white w-5/6 relative flex flex-row-reverse gap-10 items-center h-[85vh] px-20 rounded-md shadow-lg">
        <img src={companylogo} alt="rurutek" className='absolute top-10 right-20'/>
        <form className="flex-1 flex justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl">Register</h1>
            <p className="">
                Welcome! Please Register to get login credentials.<br/>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="" className="">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border w-full py-1.5 px-5"
                  onChange={e => setValues({ ...values, username: e.target.value })}
                  required
                ></input>
              </div>
              <div className="flex flex-col">
                <label htmlFor="text" className="">
                  Employee id
                </label>
                <input type="text" placeholder="Employee Id" className="border w-full py-1.5 px-5" onChange={e => setValues({ ...values, empid: e.target.value })}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="password" className="">
                  Password
                </label>
                <div className="flex  justify-between items-center border  w-full">
                  <input
                    type={loginpasswordType}
                    onChange={handlePasswordChange}
                    value={passwordLoginInput}
                    placeholder="Enter password"
                    className="py-1.5 px-5"
                    required
                  ></input>
                  <div className="d-flex me-2">
                    {loginpasswordType === "password" ? <FontAwesomeIcon onClick={tooglePass} icon={faEye} /> : <FontAwesomeIcon onClick={tooglePass} icon={faEyeSlash} />}
                  </div>
                </div>
              </div>
              <div className="">
                <button className="border w-full py-2 rounded-md bg-teal-500 text-white">Register</button>
              </div>
            </form>
            <div className="mt-5 flex gap-2">
              Do you have an account ? 
               <Link to="/" className="text-blue-500">
                 Login
              </Link>
            </div>

          </div>
        </form>
        <div className="flex-1 flex justify-center">
          <img src={loginimage} alt="rurutek" className="w-5/6 h-5/6" />
        </div>
      </div>
    </div>
  );
};

export default Register;

