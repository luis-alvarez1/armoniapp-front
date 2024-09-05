import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Test from './pages/Test'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  );
};

export default App;