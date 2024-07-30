import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmployeeForm from './Components/EmployeeForm';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to = "employee"/>}/>
          <Route path='/employee' element={<EmployeeManagementApp/>}/> 
          <Route path='/newemployee' element={<EmployeeForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
