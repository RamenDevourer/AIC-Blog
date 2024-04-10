import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Create() {
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        axios.get('http://localhost:5555/auth/protected')
        .catch((error) => {
        navigate('/create');
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
        {invalid}
      </>
    );
}

export default Create;
