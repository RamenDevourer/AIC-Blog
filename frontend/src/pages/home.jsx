import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate,Link } from 'react-router-dom';
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
                console.log(error, "try block error");
            }
        }

        fetchData();
    }, []);



    function limitString(text, wordLimit, charLimit) {
        return text.trim().split(/\s+/).slice(0, wordLimit).join(' ').slice(0, charLimit) + (text.length > charLimit || text.split(/\s+/).length > wordLimit ? '...' : '');
    }
  
    return (
      <>
        <Navbar />
        <div className='container'>
          <div className='row'>
          {list.length > 0 ? (
        <>
            <div className='col1'>
            <Link className='link' to={`/blog/${list[1]._id}`}>
              <div className='card'>
                <div className='title'>{limitString(list[1].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[1].content, 30, 200)}</div>
              </div></Link>
              <Link className='link' to={`/blog/${list[2]._id}`}>
              <div className='card'>
                <div className='title'>{limitString(list[2].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[2].content, 30, 200)}</div>
              </div></Link>
            </div>
            <div className='col2'>
            <Link className='link' to={`/blog/${list[0]._id}`}>
              <div className='card'>
                <div className='title'>{limitString(list[0].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[0].content, 70, 400)}</div>
              </div></Link>
            </div>
            <div className='col3'>
            <Link className='link' to={`/blog/${list[3]._id}`}>
              <div className='card'>
                <div className='title'>{limitString(list[3].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[3].content, 30, 200)}</div>
              </div></Link>
              <Link className='link' to={`/blog/${list[4]._id}`}>
              <div className='card'>
                <div className='title'>{limitString(list[4].title, 20, 100)}</div>
                <hr />
                <div className='content'>{limitString(list[4].content, 30, 200)}</div>
              </div></Link>
            </div>
            </>
      ) : (
        <div>Loading...</div>
      )}
          </div>
        </div>
      </>
    );
}

export default Home;
