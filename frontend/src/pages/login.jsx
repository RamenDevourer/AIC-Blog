import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState(false);
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

    const handleInvalid = () => {
        if (invalid){
            return "Invalid username or password";
        }
        return null;
    }

    const handleProtec = async () => {

      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
          // Handle case where access token is not available
          console.log("Access token not found");
          return;
      }

      axios.get('http://localhost:5555/auth/protected', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }})
      .then((res) => {
        setInvalid(false);
        // navigate('/create');
        console.log(res);
    })
      .catch((error) => {
      // navigate('/create');
      console.log(error.message);
  })
  };
  
    return (
      <>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {handleInvalid}
        <button onClick={handleProtec}>Protec</button>
      </>
    );
}

export default Login;
