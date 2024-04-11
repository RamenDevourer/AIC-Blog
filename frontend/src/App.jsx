import Login from './pages/login.jsx'
import Logout from './pages/logout.jsx'
import Create from './pages/create.jsx'
import Home from './pages/home.jsx'
import Blog from './pages/blog.jsx'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/create' element={<Create />} />
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<Blog />} />
    </Routes>
  )
}

export default App;
