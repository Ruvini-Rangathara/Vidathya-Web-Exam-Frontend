import Input from "./component/input.tsx";
import { CiUser } from "react-icons/ci";
import CustomButton from "./component/CustomButton.tsx";
import Chart from "./component/Chart.tsx";

const search = (e: any, name: string) => {
    console.log(e.target.value, name);
}
const Dashboard = () => {
    return (
        <div className={'w-[85%] top-0 ml-[15%] transparent flex flex-col'}>
            <div className={' w-[100%] h-[8vh] bg-[#E8D2E2] mx-auto shadow-md mb-2 flex justify-between'}>
                <div className={'ml-10 mt-1 flex'}>
                    <Input type={'text'} name={'search'} optional={true} callBack={search}/>
                    <button className={'bg-[#5A294C] text-white rounded h-6 mt-2 px-2'}>Search</button>
                </div>
                <div className={'flex mr-10 justify-center items-center'}>
                    <label className={'mr-2'}>Ms.Ruvini</label>
                    <CiUser className={'w-8 h-8 rounded-full bg-[white] p-1'}/>
                    {/*<img src={'./assets/images/ruvini.jpg'} alt={'profile'} className={'w-12 h-12 rounded-full'}/>*/}
                </div>
            </div>
            <div className={'flex justify-between'}>
                <h1 className={'text-[3rem] text-[#5A294C] ml-12'}>Dashboard</h1>
                <div className={'h-30px mr-12 my-auto'}>
                    <CustomButton borderColor={'#F9C6EA'} bgColor={'white'} hoverColor={'#5A294C'} textColor={'#5A294C'} textHoverColor={'white'} text={'Generate Report'}
                                  onClick={() => console.log('Generate clicked')}/>
                </div>
            </div>
            <div className={'text-[#772460] mx-auto w-[80%] h-[15vh] flex justify-center items-center'}>
                <div
                    className={'w-[18%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                    <label className={'text-[21px] '}>134</label>
                    <label className={'text-[25px]'}>Students</label>
                </div>
                <div
                    className={'w-[18%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                    <label className={'text-[21px] '}>13</label>
                    <label className={'text-[25px]'}>Teachers</label>
                </div>
                <div
                    className={'w-[18%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                    <label className={'text-[21px] '}>34</label>
                    <label className={'text-[25px]'}>Exams</label>
                </div>
                <div
                    className={'w-[18%] h-[13vh] shadow-xl bg-[#E8D2E2] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                    <label className={'text-[21px] '}>34</label>
                    <label className={'text-[25px]'}>Exams</label>
                </div>
            </div>

            <div className={'w-[95%] h-[60vh] flex justify-around mt-4  bg-[white] rounded-2xl shadow-md p-8 pt-4 mx-auto'}>
                <div className={'w-[45%] h-[90%] bg-transparent p-8'}>
                    <h1 className={'text-3xl text-center mb-2 text-[#5A294C]'}>About Us</h1>
                    <p className={'text-center text-sm text-[#5A294C]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequatur, dolor
                        dolore dolorem, dolorum ducimus eaque eius eligendi error est et eum ex explicabo facilis
                        inventore ipsam iure laboriosam laborum laudantium magnam minus molestiae natus nemo neque
                        obcaecati odio officiis omnis perspiciatis placeat porro praesentium provident quae quas quia
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

            <div className={'w-[100%] h-[60vh] flex justify-around mt-2'}>
                <div className={'w-[45%] h-[90%] bg-[white] rounded-2xl shadow-md pt-6'}>
                    <Chart/>
                </div>
                <div className={'w-[45%] h-[90%] bg-[white] rounded-2xl shadow-md'}>

                </div>
            </div>

            <hr className={'w-[90%] mx-auto mb-6'}/>
            <div></div>

        </div>
    )
}

export default Dashboard;