import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar.jsx'
import './home.css'


function Home() {
    const [list, setList] = useState([]);
    const [mongoList, setMongoList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5555/blog/`);
                setMongoList(res.data.data);
                res.data.data.forEach((blog) => {
                    setList((l) => [...l, {title: blog.title, _id: blog._id, content: blog.content}]);
                    // setList((l) => [...l, blog.blog]);
                });
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    console.log(list);

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

    function limitString(text, wordLimit, charLimit) {
        return text.trim().split(/\s+/).slice(0, wordLimit).join(' ').slice(0, charLimit) + (text.length > charLimit || text.split(/\s+/).length > wordLimit ? '...' : '');
    }
  
    return (
      <>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col1'>
              <div className='card'>
                <div className='title'>{limitString(list[1].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[1].content, 30, 200)}</div>
              </div>
              <div className='card'>
                <div className='title'>{limitString(list[2].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[2].content, 30, 200)}</div>
              </div>
            </div>
            <div className='col2'>
            <div className='card'>
                <div className='title'>{limitString(list[1].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[0].content, 80, 500)}</div>
              </div>
            </div>
            <div className='col3'>
            <div className='card'>
                <div className='title'>{limitString(list[3].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[3].content, 30, 200)}</div>
              </div>
              <div className='card'>
                <div className='title'>{limitString(list[4].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[4].content, 30, 200)}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;
