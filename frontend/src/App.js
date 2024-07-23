import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import EmployeeManagementApp from './Components/EmployeeManagementApp';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to = "employee"/>}/>
          <Route path='/employee' element={<EmployeeManagementApp/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
