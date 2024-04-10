import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();

    return (
      <>
      <div className='container'>
        <div className='navbar'>
          <img className='logo' src='/src/assets/muse_memor.jpeg' ></img>
          <div className='navbar-title'>MuseMemoir</div>
          <span class="material-symbols-outlined">person_2</span>
        </div>
      </div>
      </>
    );
}

export default Navbar;
