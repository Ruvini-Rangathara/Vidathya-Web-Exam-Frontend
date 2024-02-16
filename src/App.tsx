import './App.css';
import Login from "./view/login.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./view/signup.tsx";
import Settings from "./view/settings.tsx";
import Dashboard from "./view/dashboard.tsx";
import About from "./view/about.tsx";
import Teacher from "./view/teacher.tsx";
import Exam from "./view/exam.tsx";
import MyExam from "./view/myexam.tsx";
import Paper from "./view/paper.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/setting" element={<Settings/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/teacher" element={<Teacher/>}/>
                <Route path="/myexam" element={<MyExam/>}/>
                <Route path="/exam" element={<Paper/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
