import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./component/input.tsx";
import CustomButton from "./component/CustomButton.tsx";

const Login: React.FC = () => {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };



    const login = async ()=>{
        // if(password && username){
        //     const user = {
        //         username : username,
        //         password : password
        //     }
        //
        //     console.log(JSON.stringify(user))
        //
        //     try{
        //         const response = await fetch('http://localhost:3000/api/user/login',{
        //             method : 'POST',
        //             headers : {
        //                 'Content-Type' : 'application/json'
        //             },
        //             body : JSON.stringify(user)
        //         })
        //         const data = await response.json()
        //         if(data.status === 'success'){
        //             localStorage.setItem('username',user.username)
        //             console.log("saved username in local storage : ",localStorage.getItem('username'))
        //             window.location.href = '/'
        //         }else{
        //             alert(data.message)
        //         }
        //     }catch (e){
        //         console.log(e)
        //     }
        // }
    }


    return (
        <div className={'w-[100vw] h-[100vh]'}>
            <br />
            <p className={'text-[25px] text-[#071722] text-center mt-12'}>Login</p>
            <p className={'text-[20px] text-[#071722] text-center'}>Vidathya Higher Education Centre</p>
            <div className="w-3/5 h-3/5 m-auto border border-gray-200 rounded-xl flex bg-gray-50">
                <div className={' w-[60%] m-auto'}>
                    <img src={'public/instituteLogo.png'} alt="Logo" />
                </div>
                <div className="flex flex-col justify-center items-center mt-10 mr-10">
                    <div className="col-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                name="username"
                                label="Username"
                                optional={false}
                                callBack={handleUsernameChange}
                                placeholder='Username : '
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                optional={false}
                                callBack={handlePasswordChange}
                                placeholder='Password : '
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <br />
                        <CustomButton
                            borderColor={'#5A294C'}
                            bgColor={'white'}
                            hoverColor={'#5A294C'}
                            textColor={'#5A294C'}
                            textHoverColor={'white'}
                            text={'Login'}
                            onClick={login}
                        />
                        <br />
                        <p className={'mb-10'}>
                            Do you have no account ?
                            {/*<Link to="/signup" className='btn btn-outline-dark col-12'> <span className={'text-blue-500'}> Sign up</span></Link>*/}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;