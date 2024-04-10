import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar.jsx'


function Home() {
    const navigate = useNavigate();

    const handleLogin = async () => {
        await axios
        .post(`http://localhost:5555/auth/login`, {"username" : username, "password" : password})
        .then((res) => {
            setInvalid(false);
            // navigate('/create');
            console.log(res);
            var token = res.data.accessToken;
            localStorage.setItem('accessToken', token);

        })
        .catch((error) => {
            setInvalid(true);
            console.log(error.message);
        })
    };
  
    return (
      <>
        <Navbar />
      </>
    );
}

export default Home;
