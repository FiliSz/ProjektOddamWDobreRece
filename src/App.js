import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Logout from "./components/Logout";
import Register from "./components/Register";
import './scss/main.scss';
import FormFirstStep from "./components/FormStepFirst";
import FormSecondStep from "./components/FormStepSecond";
import FormThirdStep from "./components/FormStepThird";
import FormFourthStep from "./components/FormStepFourth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/form" element={<FormFirstStep/>}/>
        <Route path="/second" element={<FormSecondStep/>}/>
        <Route path="/third" element={<FormThirdStep/>}/>
        <Route path="/fourth" element={<FormFourthStep/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
