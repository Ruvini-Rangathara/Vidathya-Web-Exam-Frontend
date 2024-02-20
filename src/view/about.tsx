import Chart from "./component/Chart.tsx";
import Navbar from "./navbar.tsx";

const About = () => {
    return (
        <>
            <Navbar/>
            <div className={'w-[83%] h-screen top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>

                <div
                    className={'w-[95%] h-[40vh] flex justify-around mt-4  bg-[white] rounded-t-2xl shadow-sm p-8 pt-4 mx-auto'}>
                    <div className={'w-[90%] h-[90%] bg-transparent p-6'}>
                        <h1 className={'text-xl text-center mb-2 text-[#5A294C]'}>Mission</h1>
                        <p className={'text-center text-sm text-[#5A294C]'}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aliquam blanditiis consequatur, dolor
                            dolore dolorem, dolorum ducimus eaque eius eligendi error est et eum ex explicabo facilis
                            inventore ipsam iure laboriosam laborum laudantium magnam minus molestiae natus nemo neque
                            obcaecati odio officiis omnis perspiciatis placeat porro praesentium provident quae quas
                            quia
                        </p>

                        <h1 className={'text-xl text-center mt-2 mb-2 text-[#5A294C]'}>Vision</h1>
                        <p className={'text-center text-sm text-[#5A294C]'}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aliquam blanditiis consequatur, dolor
                            dolore dolorem, dolorum ducimus eaque eius eligendi error est et eum ex explicabo facilis
                            inventore ipsam iure laboriosam laborum laudantium magnam minus molestiae natus nemo neque
                            obcaecati odio officiis omnis perspiciatis placeat porro praesentium provident quae quas
                            quia
                        </p>

                    </div>
                </div>

                <div
                    className={'w-[95%] h-[55vh] flex bg-[white] justify-between rounded-b-2xl  shadow-md mt-0 m-auto'}>
                    <div className={'flex flex-col px-12 justify-center ml-6 text-[14px]'}>
                        <div className={'flex '}>
                            <img src={'src/assets/whatsapp.png'} alt={'whatsapp'} className={'w-6 h-6 mb-4'}/>
                            <label className={'ml-6'}>+9478 66 28 481 / +9478 66 28 482 </label>
                        </div>
                        <div className={'flex'}>
                            <img src={'src/assets/linkedin.png'} alt={'linkedin'} className={'w-6 h-6 mb-4'}/>
                            <label className={'ml-6'}>Vidathya Higher Education Centre</label>
                        </div>
                        <div className={'flex'}>
                            <img src={'src/assets/gmail.png'} alt={'gmail'} className={'w-6 h-6 mb-4'}/>
                            <label className={'ml-6'}>vidathyainstitute@gmail.com</label>
                        </div>
                        <div className={'flex'}>
                            <img src={'src/assets/facebook.png'} alt={'facebook'} className={'w-6 h-6 mb-4'}/>
                            <label className={'ml-6'}>Vidathya Higher Education Centre</label>
                        </div>
                        <div className={'flex'}>
                            <img src={'src/assets/youtube.png'} alt={'youtube'} className={'w-6 h-6 mb-4'}/>
                            <label className={'ml-6'}>Vidathya Higher Education Centre</label>
                        </div>

                    </div>

                    <div className={'w-[50%] h-[100%] bg-[white] rounded-b-2xl p-8'}
                         style={{
                             backgroundImage: 'url(src/assets/bg-img2.png)',
                             backgroundSize: "cover",
                             backgroundPosition: 'center',
                         }}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;