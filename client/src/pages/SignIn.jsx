import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart , signInSuccess , signInFailure } from '../redux/user/userSlice.js'
import OAuth from "../components/Oauth.jsx";

export default function SignIn() {
  const [formData , setFormData] = useState({});
  // const [error , setError] = useState(null);
  // const [ loading , setLoading] = useState(false);
  const {loading , error} = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setFormData({
      ...formData ,
      [e.target.id] : e.target.value,
    });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      //setLoading(true);
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        // setError(data.message);
        // setLoading(false);
        dispatch(signInFailure(data.message));
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data));
      Navigate('/');
    } catch (error) {
      // setError(data.message);
      // setLoading(false);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-8">SignIn</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading?'Loading...':'Sign in'}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5 font-semibold">
        <p>Doest Have an account?</p>
        <Link to={"/sign-up"} className="text-blue-700">Sign up</Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
