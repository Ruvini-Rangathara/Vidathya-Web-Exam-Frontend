import './App.css';
import Navbar from "./view/navbar.tsx";
import Dashboard from "./view/dashboard.tsx";

function App() {
    return (
        <>
            <div className={'bg-[#EDEADE]'}>
                <Navbar/>
                <Dashboard/>
            </div>
        </>
    );
}

export default App;
