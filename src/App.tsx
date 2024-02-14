import './App.css';
import Login from "./view/login.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./view/signup.tsx";
import Main from "./view/main.tsx";

function App() {
    // return (
        // <>
        //     <div className={'bg-[#EDEADE]'}>
        //         {/*<Navbar/>*/}
        //         {/*<Dashboard/>*/}
        //         {/*<Login/>*/}
        //
        //         <Signup/>
        //
        //     </div>
        // </>

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home" element={<Main/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
