import './App.css';
// import {Routes, Route} from 'react-router-dom'
// import Forget from './UI/Components/Pages/ForgetPassword/Forget';
// import Login from './UI/Components/Pages/Login/Login';
// import Signup from './UI/Components/Pages/Signup/Signup';
// import Home from './UI/Components/Pages/Home';
import Dashboard from './UI/Components/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      {/* <Routes>
        
      <Route  path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forget' element={<Forget/>} />
    </Routes>  */}
    </div>
  );
}

export default App;