import Navbar from "./navbar.tsx";
import Input from "./component/input.tsx";
import {CiUser} from "react-icons/ci";

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
                    <h1 className={'text-[3rem] text-[#5A294C] ml-12 opacity-[50%]'}>Settings</h1>
                </div>


                <div
                    className={'w-[60%] h-[75%] justify-around mt-4  bg-[white] rounded-2xl shadow-md p-8 pt-4 mx-auto'}>

                    {/*    search bar*/}

                    <div className={'flex w-[30vw] m-auto '}>
                        <input
                            className={'bg-[white] rounded block border border-gray-200 outline-none focus:border-t-gray-400 p-2 h-6 w-[90%] text-gray-700'}
                            type={'email'} name={'email'} placeholder={'Your email'}/>
                        <button className={'bg-[#5A294C] text-white rounded h-6 px-2 ml-4'}>Search</button>
                    </div>

                    <div className={'w-[70%] h-[90%] bg-transparent p-8 mx-auto border'}>
                        <br/>

                        {/*inputs for full name, nic*/}

                        <div className={'flex flex-col border w-[25vw] mx-auto'}>
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
                </div>
            </div>
        </>

    )
}

export default Settings;