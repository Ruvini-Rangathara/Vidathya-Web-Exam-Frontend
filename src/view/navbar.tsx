import { MdSpaceDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiExamFill } from "react-icons/pi";
import { MdSubject } from "react-icons/md";
import { MdSettings } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <div className={' h-[100%] w-[15%] fixed top-0 left-0 z-10 bg-[#F9C6EA] p-4 shadow-md '}>
                <div className={'flex flex-col'}>
                    {/*label and icon*/}
                    <div className={'flex flex-col items-center'}>
                        <img src={'public/instituteLogo2.png'} alt={'vidathya'} className={'w-32 h-20'}/>
                        <label className={'mt-2 text-[#5A294C] text-center font-bold text-xs'}>Vidathya Higher Education Centre</label>
                    </div>

                    <div className={'pl-4'}>
                        <hr className={'w-[80%] mb-8 pl-2'}/>

                        <div className={'flex items-center mb-4'}>
                            <MdSpaceDashboard className={'w-6 h-6'}/>
                            <label className={'ml-4 text-[#5A294C] font-bold'}>Dashboard</label>
                        </div>
                        <div className={'flex items-center mb-4'}>
                            <PiStudentFill className={'w-6 h-6'}/>
                            <label className={'ml-4 text-[#5A294C] font-bold'}>Students</label>
                        </div>
                        <div className={'flex items-center mb-4'}>
                            <PiChalkboardTeacherFill className={'w-6 h-6'}/>
                            <label className={'ml-4 text-[#5A294C] font-bold'}>Teachers</label>
                        </div>
                        <div className={'flex items-center mb-4'}>
                            <PiExamFill className={'w-6 h-6'}/>
                            <label className={'ml-4 text-[#5A294C] font-bold'}>Exams</label>
                        </div>
                        <div className={'flex items-center mb-4'}>
                            <MdSubject className={'w-6 h-6'}/>
                            <label className={'ml-4 text-[#5A294C] font-bold'}>Subjects</label>
                        </div>
                        <div className={'flex items-center mb-4'}>
                            <MdSettings className={'w-6 h-6'}/>
                            <label className={'ml-4 text-[#5A294C] font-bold'}>Settings</label>
                        </div>
                    </div>

                    <div className={'flex justify-center items-center'}>
                        <div className={'bg-[#E8D2E2] w-40 h-40 rounded-2xl p-4'}>
                            <p className={'text-xs text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aliquam blanditiis consequatur, dolor dolore dolorem,</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Navbar;