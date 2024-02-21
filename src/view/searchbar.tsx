import Input from "./component/input.tsx";
import {CiUser} from "react-icons/ci";
import Cookies from "js-cookie";

const search = (e: any, name: string) => {
    console.log(e.target.value, name);
}
const Searchbar = () => {
    const nic = Cookies.get("nic");
    return (
        <div className={'w-[100%] h-[8vh] mb-2 '}>
            <div className={' w-[100%] h-[8vh] bg-[#E8D2E2] mx-auto shadow-md mb-2 flex justify-between fixed'}>
                <div className={'ml-10 mt-1 flex'}>
                    <label className={'text-[#5A294C] w-[67vw] mt-2 text-center'}>VIDATHYA HIGHER EDUCATION
                        CENTRE
                    </label>

                    <div className={'flex justify-center items-center'}>
                        <label className={'mr-2'}>{nic}</label>
                        <CiUser className={'w-8 h-8 rounded-full bg-[white] p-1 mr-2'}/>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Searchbar;