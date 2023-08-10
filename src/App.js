
import './App.css';
import Login from './component/login';
import Home from './component/home';
import Hello from './pages/Hello';
import Upload from './component/upload';
import Profile from './component/me';
import Leaderborad from './component/leaderborad';
import { BrowserRouter,Routes, Route }  from 'react-router-dom'
function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Routes>
          <Route index element={<Login/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Login/>} />
          <Route path='/hello' element={<Hello/>}/>
          <Route path='/Upload' element={<Upload/>} />
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Leaderborad' element={<Leaderborad/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
