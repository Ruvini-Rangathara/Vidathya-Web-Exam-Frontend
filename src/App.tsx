import './App.css';
import Login from "./view/login.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./view/signup.tsx";
import Settings from "./view/settings.tsx";
import Dashboard from "./view/dashboard.tsx";
import About from "./view/about.tsx";

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
            </Routes>
        </BrowserRouter>

    );
}

export default App;
