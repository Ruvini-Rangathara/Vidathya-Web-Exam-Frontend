import Navbar from "./navbar.tsx";
import Dashboard from "./dashboard.tsx";

const Main = () => {
    return (
        <div className={'bg-[#EDEADE]'}>
            <Navbar/>
            <Dashboard/>
        </div>
    );
}

export default Main;