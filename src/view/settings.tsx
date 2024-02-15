import Navbar from "./navbar.tsx";
import Input from "./component/input.tsx";
import {CiUser} from "react-icons/ci";
import CustomButton from "./component/CustomButton.tsx";

const search = (e: any, name: string) => {
    console.log(e.target.value, name);
}
const Settings = () => {
    return (
        <>
            <Navbar/>
            <div className={'w-[83%] top-0 h-screen ml-[17%] bg-[#E8D2E2] flex flex-col text-[14px]'}>
                {/*top fixed bar*/}
                <div className={' w-[100%] h-[8vh] bg-[#E8D2E2] mx-auto shadow-md mb-2 flex justify-between'}>
                    <div className={'ml-10 mt-1 flex'}>
                        <Input type={'text'} name={'search'} optional={true} callBack={search}/>
                        <button className={'bg-[#5A294C] text-white rounded h-6 mt-2 px-2'}>Search</button>
                    </div>
                    <div className={'flex mr-10 justify-center items-center'}>
                        <label className={'mr-2'}>Ms.Ruvini</label>
                        <CiUser className={'w-8 h-8 rounded-full bg-[white] p-1'}/>
                    </div>
                </div>

                <div className={'flex justify-between'}>
                    <h1 className={'text-[2rem] text-[#5A294C] ml-12 opacity-[50%]'}>Settings</h1>
                </div>


                <div
                    className={'w-[60%] h-[80%] justify-around bg-[white] rounded-2xl shadow-md p-8 mx-auto'}>
                    <div className={'flex w-[25vw] m-auto '}>
                        <input
                            className={'bg-[white] rounded block border border-gray-200 outline-none focus:border-t-gray-400 p-2 h-6 w-[90%] text-gray-700'}
                            type={'email'} name={'email'} placeholder={'Your email'}/>
                        <button className={'bg-[#5A294C] text-white rounded h-6 px-2 ml-4'}>Search</button>
                    </div>

                    <div className={'w-[65%] h-[90%] bg-transparent p-8 mx-auto'}>

                        <div className={'flex flex-col w-[25vw] mx-auto'}>
                            <div className="col-6">
                                <div className="form-group">
                                    <Input
                                        type="text"
                                        name="fullName"
                                        label="Full Name"
                                        optional={false}
                                        callBack={search}
                                        placeholder=''
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <Input
                                        type="text"
                                        name="nic"
                                        label="NIC"
                                        optional={false}
                                        callBack={search}
                                        placeholder=''
                                    />
                                </div>
                            </div>

                            </div>
                        <div className={'flex justify-between'}>
                            <h1 className={'text-md text-center mt-8 text-[#5A294C]'}>Change Password</h1>
                        </div>
                        <div className={'flex flex-col'}>
                            <div className="col-6">
                                <div className="form-group">
                                    <Input
                                        type="password"
                                        name="oldPassword"
                                        label="Old Password"
                                        optional={false}
                                        callBack={search}
                                        placeholder=''
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <Input
                                        type="password"
                                        name="newPassword"
                                        label="New Password"
                                        optional={false}
                                        callBack={search}
                                        placeholder=''
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <Input
                                        type="password"
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        optional={false}
                                        callBack={search}
                                        placeholder=''
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={'w-[100%] flex justify-end gap-4 mt-2'}>

                        <CustomButton
                            borderColor={'#5A294C'}
                            bgColor={'white'}
                            hoverColor={'#5A294C'}
                            textColor={'#5A294C'}
                            textHoverColor={'white'}
                            text={'Save'}
                            onClick={() => console.log('Save clicked')}
                        />

                        <CustomButton
                            borderColor={'#F85F48'}
                            bgColor={'white'}
                            hoverColor={'#F85F48'}
                            textColor={'#F85F48'}
                            textHoverColor={'white'}
                            text={'Delete'}
                            onClick={() => console.log('Delete clicked')}
                        />

                        <CustomButton
                            borderColor={'#AAAAAA'}
                            bgColor={'white'}
                            hoverColor={'#AAAAAA'}
                            textColor={'#AAAAAA'}
                            textHoverColor={'white'}
                            text={'Cancel'}
                            onClick={() => console.log('Cancel clicked')}
                        />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Settings;