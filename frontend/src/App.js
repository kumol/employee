import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import EmployeeManagementApp from './Components/EmployeeManagementApp';
import NewEmployee from './Components/NewEmployee';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to = "employee"/>}/>
          <Route path='/employee' element={<EmployeeManagementApp/>}/> 
          <Route path='/newemployee' element={<NewEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
