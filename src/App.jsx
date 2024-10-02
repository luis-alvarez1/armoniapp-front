import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Test from './pages/Test'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import Tareas from './pages/Tareas'
import Home from './pages/Home'
import Contacts from './pages/Contacts'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element={<Test/>} />
        <Route path='/tasks' element={<Tareas/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile/edit' element={<ProfileEdit/>} />
      </Routes>
    </Router>
  );
};

export default App;