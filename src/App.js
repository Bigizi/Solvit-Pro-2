import './App.css';
import {Routes, Route} from 'react-router-dom'
import Forget from './UI/Components/Pages/ForgetPassword/Forget';
import Login from './UI/Components/Pages/Login/Login';
import Signup from './UI/Components/Pages/Signup/Signup';
import Home from './UI/Components/Pages/Home';
import Dashboard from './UI/Components/Pages/Dashboard/Dashboard';
import DashboardAdmin from './UI/Components/Pages/Dashboard/DashboardAdmin';

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forget' element={<Forget/>} />
      <Route path='/dash' element={<Dashboard/>} />
      <Route path='/dash1' element={<DashboardAdmin/>} />
    </Routes> 
    </div>
  );
}

export default App;