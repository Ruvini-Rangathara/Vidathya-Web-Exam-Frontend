import Input from "./component/input.tsx";
import {CiUser} from "react-icons/ci";

const search = (e: any, name: string) => {
    console.log(e.target.value, name);
}
const Searchbar = () => {
    return (
        <div className={' w-[100%] h-[8vh] bg-[#E8D2E2] mx-auto shadow-md mb-2 flex justify-between fixed'}>
            <div className={'ml-10 mt-1 flex'}>
                <Input type={'text'} name={'search'} optional={true} callBack={search}/>
                <button className={'bg-[#5A294C] text-white rounded h-6 mt-2 px-2'}>Search</button>
            </div>
            <div className={'flex mr-10 justify-center items-center'}>
                <label className={'mr-2'}>Ms.Ruvini</label>
                <CiUser className={'w-8 h-8 rounded-full bg-[white] p-1'}/>
            </div>
        </div>


    );

}

export default Searchbar;