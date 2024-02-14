import './App.css';
import Navbar from "./view/navbar.tsx";
import Dashboard from "./view/dashboard.tsx";
import Login from "./view/login.tsx";
import Signup from "./view/signup.tsx";

function App() {
    return (
        <>
            <div className={'bg-[#EDEADE]'}>
                {/*<Navbar/>*/}
                {/*<Dashboard/>*/}
                {/*<Login/>*/}

                <Signup/>

            </div>
        </>
    );
}

export default App;
