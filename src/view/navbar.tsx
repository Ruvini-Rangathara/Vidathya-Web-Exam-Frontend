import {MdSpaceDashboard} from "react-icons/md";
import {PiStudentFill} from "react-icons/pi";
import {PiChalkboardTeacherFill} from "react-icons/pi";
import {PiExamFill} from "react-icons/pi";
import {MdSubject} from "react-icons/md";
import {MdSettings} from "react-icons/md";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className={' h-[100%] w-[17%] fixed top-0 left-0 z-10 bg-[#F9C6EA] p-4 shadow-md '}>
                <div className={'flex flex-col'}>
                    <div className={'flex flex-col items-center'}>
                        <img src={'public/instituteLogo2.png'} alt={'vidathya'} className={'w-36 h-20'}/>
                        <label className={'mt-2 text-[#5A294C] text-center font-bold text-xs'}>Vidathya Higher Education
                            Centre</label>
                    </div>

                    <div className={'pl-4'}>
                        <hr className={'w-[80%] mb-8 pl-2'}/>

                        <Link to={'/home'}>
                            <div className={'flex items-center mb-4'}>
                                <MdSpaceDashboard className={'w-6 h-6'}/>
                                <label className={'ml-4 text-[#5A294C] font-bold cursor-pointer'}>Dashboard</label>
                            </div>
                        </Link>

                        <Link to={'/students'}>
                            <div className={'flex items-center mb-4'}>
                                <PiStudentFill className={'w-6 h-6'}/>
                                <label className={'ml-4 text-[#5A294C] font-bold  cursor-pointer'}>Students</label>
                            </div>
                        </Link>

                        <Link to={'/teachers'}>
                            <div className={'flex items-center mb-4'}>
                                <PiChalkboardTeacherFill className={'w-6 h-6'}/>
                                <label className={'ml-4 text-[#5A294C] font-bold cursor-pointer'}>Teachers</label>
                            </div>
                        </Link>
                        <Link to={'/exams'}>
                            <div className={'flex items-center mb-4'}>
                                <PiExamFill className={'w-6 h-6'}/>
                                <label className={'ml-4 text-[#5A294C] font-bold  cursor-pointer'}>Exams</label>
                            </div>
                        </Link>
                        <Link to={'/about'}>
                            <div className={'flex items-center mb-4'}>
                                <MdSubject className={'w-6 h-6'}/>
                                <label className={'ml-4 text-[#5A294C] font-bold  cursor-pointer'}>About us</label>
                            </div>
                        </Link>

                        <Link to={'/setting'}>
                            <div className={'flex items-center mb-4'}>
                                <MdSettings className={'w-6 h-6'}/>
                                <label className={'ml-4 text-[#5A294C] font-bold cursor-pointer'}>Settings</label>
                            </div>
                        </Link>

                    </div>

                    <div className={'flex justify-center items-center'}>
                        <div className={'bg-[#E8D2E2] w-40 h-40 rounded-2xl p-4'}>
                            <p className={'text-xs text-center text-[gray]'}>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                                Aliquam blanditiis consequatur, dolor dolore dolorem,</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Navbar;