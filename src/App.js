import './App.css';
import {Routes, Route} from 'react-router-dom'
import Forget from './UI/Components/Pages/ForgetPassword/Forget';
import Login from './UI/Components/Pages/Login/Login';
import Signup from './UI/Components/Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <h1>Some random text ..... some other text</h1> */}
      <Signup />
      {/* <Login/> */}
      {/* <Forget/> */}
      <Routes>
      {/* <Route path='/' element={<Landing/>} /> */}
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forget' element={<Forget/>} />
      {/* <Route path='/contactus' element={<Contact/>}/> */}
      {/* <Route path='/Dash' element={<Dashboard/>}/> */}
    </Routes>
      
    </div>
  );
}

export default App;