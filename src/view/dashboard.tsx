import CustomButton from "./component/CustomButton.tsx";
import Chart from "./component/Chart.tsx";
import Navbar from "./navbar.tsx";
import Searchbar from "./searchbar.tsx";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";


const Dashboard = () => {
    const [studentCount, setStudentCount] = useState(0);
    const [teacherCount, setTeacherCount] = useState(0);
    const [examCount, setExamCount] = useState(0);
    const [myExamCount, setMyExamCount] = useState(0);

    useEffect(() => {
        loadTeacherCount();
        loadStudentCount();
        loadExamCount();
        loadMyExamCount();
    }, []);

    useEffect(() => {
    }, [teacherCount]);

    useEffect(() => {
    }, [studentCount]);

    useEffect(() => {
    }, [examCount]);

    useEffect(() => {
    }, [myExamCount]);


    const loadTeacherCount = () => {
        fetch("http://localhost:9091/api/v1/user/count/teacher")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                setTeacherCount(data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const loadStudentCount = () => {
        fetch("http://localhost:9091/api/v1/user/count/student")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                setStudentCount(data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const loadExamCount = () => {
        fetch("http://localhost:9090/exam/api/v1/paper/count")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                setExamCount(data.content);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const loadMyExamCount = () => {
        const nic = Cookies.get("nic");
        fetch("http://localhost:9090/exam/api/v1/myexam/count/" + nic)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                setMyExamCount(data.content);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (<>
            <Navbar/>
            <div className={'w-[83%] top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>
                <Searchbar/>
                <div className={'flex justify-between'}>
                    <h1 className={'text-[3rem] text-[#5A294C] ml-12'}>Dashboard</h1>
                    <div className={'h-30px mr-12 my-auto'}>
                        <CustomButton borderColor={'#F9C6EA'} bgColor={'white'} hoverColor={'#5A294C'}
                                      textColor={'#5A294C'} textHoverColor={'white'} text={'Generate Report'}
                                      onClick={() => console.log('Generate clicked')}/>
                    </div>
                </div>
                <div className={'text-[#772460] mx-auto w-[80%] h-[15vh] flex justify-center items-center'}>
                    <div
                        className={'border-l-[4px] border-l-[#5A294C] w-[18%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                        <label className={'text-[21px] '}>{studentCount}</label>
                        <label className={'text-[25px]'}>Students</label>
                    </div>
                    <div
                        className={'border-l-[4px] border-l-[#5A294C] w-[18%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                        <label className={'text-[21px] '}>{teacherCount}</label>
                        <label className={'text-[25px]'}>Teachers</label>
                    </div>
                    <div
                        className={'border-l-[4px] border-l-[#5A294C] w-[18%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                        <label className={'text-[21px] '}>{examCount}</label>
                        <label className={'text-[25px]'}>Exams</label>
                    </div>
                    <div
                        className={'border-l-[4px] border-l-[#5A294C] w-[18%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                        <label className={'text-[21px] '}>{myExamCount}</label>
                        <label className={'text-[25px]'}>My Exam</label>
                    </div>
                </div>

                <div
                    className={'w-[95%] h-[60vh] flex justify-around mt-4  bg-[white] rounded-2xl shadow-md p-8 pt-4 mx-auto'}>
                    <div className={'w-[45%] h-[90%] bg-transparent p-8'}>
                        <h1 className={'text-3xl text-center mb-2 text-[#5A294C]'}>About Us</h1>
                        <p className={'text-center text-sm text-[#5A294C]'}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aliquam blanditiis consequatur, dolor
                            dolore dolorem, dolorum ducimus eaque eius eligendi error est et eum ex explicabo facilis
                            inventore ipsam iure laboriosam laborum laudantium magnam minus molestiae natus nemo neque
                            obcaecati odio officiis omnis perspiciatis placeat porro praesentium provident quae quas
                            quia
                        </p>
                        <div className={'flex justify-between px-12 mt-8'}>
                            <img src={'src/assets/whatsapp.png'} alt={'whatsapp'} className={'w-10 h-10'}/>
                            <img src={'src/assets/linkedin.png'} alt={'linkedin'} className={'w-10 h-10'}/>
                            <img src={'src/assets/gmail.png'} alt={'gmail'} className={'w-10 h-10'}/>
                            <img src={'src/assets/facebook.png'} alt={'facebook'} className={'w-10 h-10'}/>
                            <img src={'src/assets/youtube.png'} alt={'youtube'} className={'w-10 h-10'}/>

                        </div>
                    </div>
                    <div className={'w-[50%] h-[100%] bg-[white] '}
                         style={{
                             backgroundImage: 'url(src/assets/dashboard-image.png)',
                             backgroundSize: "cover",
                             backgroundPosition: 'center',
                         }}>
                    </div>

                </div>

                <div className={'w-[100%] h-[60vh] flex justify-around mt-6'}>
                    <div className={'w-[45%] h-[90%] bg-[white] rounded-2xl shadow-md pt-6'}>
                        <Chart/>
                    </div>
                    <div className={'w-[45%] h-[90%] bg-[white] rounded-2xl shadow-md px-10 py-20'}>
                        <p className={'text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Deserunt odit unde vel! Earum enim esse eum fugiat laudantium officia sed.
                            Expedita hic illo itaque maxime quam rerum similique soluta veritatis!</p>
                    </div>
                </div>

                <div>
                    <div
                        className={'pb-4 pt-4 w-[100%] h-[10vh] bg-[#E8D2E2] mx-auto shadow-md flex flex-col justify-center items-center'}>
                        <label className={'text-[#5A294C] text-[13px]'}>© 2024 All rights reserved</label>
                        <label className={'text-[#5A294C] text-[13px]'}>Developed by Ruvini Rangathara</label>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;