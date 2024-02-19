import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Input from "./component/input.tsx";
import CustomButton from "./component/CustomButton.tsx";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from 'js-cookie';

const Login: React.FC = () => {
    const [nic, setNic] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleInput = (e, type): void => {
        switch (type) {

            case 'nic':
                // this.setState({...this.state, email: e.target.value})
                setNic(e.target.value);
                break;
            case 'password':
                // this.setState({...this.state, password: e.target.value})
                setPassword(e.target.value)
                break;
        }
    }

    const handleLogin = (): void => {
        let isValidInputs = true;
        let errorMsg = "";

        // send data to backend
        const headers = {'Content-Type': 'application/json'}
        let body = {
            nic: nic,
            password: password
        }
        axios.post("http://localhost:9091/api/v1/user/auth", body, {headers: headers})
            .then(r => {

                Cookies.set("token", r.data.data.accessToken);
                Cookies.set("nic", r.data.data.user.nic);
                Cookies.set("id", r.data.data.user.id);
                navigate("/home");

            })
            .catch(e => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                }).then(r => {
                    console.log(r);
                });
            })


    }


    return (
        <div className={'w-[100vw] h-[100vh] bg-[#E8D2E2]'}>
            <br/>
            <p className={'text-[25px] text-[#071722] text-center mt-12'}>Login</p>
            <p className={'text-[20px] text-[#071722] text-center'}>Vidathya Higher Education Centre</p>
            <div className="w-3/5 h-3/5 m-auto border border-gray-200 rounded-xl flex bg-gray-50">
                <div className={' w-[60%] m-auto'}>
                    <img src={'public/instituteLogo.png'} alt="Logo"/>
                </div>
                <div className="flex flex-col justify-center items-center mt-10 mr-10">
                    <div className="col-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                name="nic"
                                label="NIC"
                                optional={false}
                                value={nic}
                                callBack={handleInput}
                                placeholder=''
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
                                value={password}
                                callBack={handleInput}
                                placeholder=''
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <br/>
                        <CustomButton
                            borderColor={'#5A294C'}
                            bgColor={'white'}
                            hoverColor={'#5A294C'}
                            textColor={'#5A294C'}
                            textHoverColor={'white'}
                            text={'Login'}
                            onClick={handleLogin}
                        />
                        <p className={'mb-6 text-[13px]'}>
                            Do you have no account ?
                            <Link to="/signup"> <span className={'text-blue-500'}> Sign up</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;