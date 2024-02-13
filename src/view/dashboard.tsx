import Input from "./component/input.tsx";
import { CiUser } from "react-icons/ci";

const search = (e: any, name: string) => {
    console.log(e.target.value, name);
}
const Dashboard = () => {
    return (
        <div className={'w-[85%] top-0 ml-[15%] transparent h-[100vh] flex flex-col'}>
            <div className={' w-[100%] h-[8vh] bg-[#E8D2E2] mx-auto shadow-md mb-4 flex justify-between'}>
                <div className={'ml-4 mt-1 flex'}>
                    <Input type={'text'} name={'search'} optional={true}  callBack={search}/>
                    <button className={'bg-[#5A294C] text-white rounded h-6 mt-2 px-2'}>Search</button>
                </div>
                <div className={'flex mr-10 justify-center items-center'}>
                    <label className={'mr-2'}>Ms.Ruvini</label>
                    <CiUser className={'w-8 h-8 rounded-full bg-[white] p-1'}/>
                    {/*<img src={'./assets/images/ruvini.jpg'} alt={'profile'} className={'w-12 h-12 rounded-full'}/>*/}
                </div>
            </div>
            <h1 className={'text-[3rem] text-[#5A294C] ml-12'}>Dashboard</h1>
            <div className={'text-[#772460] ml-6 w-[95%] h-[15vh] flex justify-center items-center'}>
                <div className={'w-[20%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                    <label className={'text-[21px] '}>134</label>
                    <label className={'text-[25px]'}>Students</label>
                </div>
                <div className={'w-[20%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                    <label className={'text-[21px] '}>13</label>
                    <label className={'text-[25px]'}>Teachers</label>
                </div>
                <div className={'w-[20%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                    <label className={'text-[21px] '}>34</label>
                    <label className={'text-[25px]'}>Exams</label>
                </div>
                <div className={'w-[20%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                    <label className={'text-[21px] '}>34</label>
                    <label className={'text-[25px]'}>Exams</label>
                </div>
            </div>



        </div>
    )
}

export default Dashboard;