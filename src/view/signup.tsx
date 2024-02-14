import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "./component/input.tsx";
import CustomButton from "./component/CustomButton.tsx";
import Swal from "sweetalert2";
import axios from "axios";

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('Student');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handlePasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    const addUser = async () => {
        try {
            if (validateSubmission()) {
                if(username === 'vidathyainstitute@gmail.com'){
                    setSelectedRole('Teacher');
                }

                const newUser = {
                    username: username, password: password, role: selectedRole,
                };

                console.log("user", newUser); // Log the object directly without stringify

                const response = await axios.post("http://localhost:3000/api/user/add", newUser);
                console.log(response);

                if (response.status === 200) {
                    Swal.fire({
                        icon: "success", title: "Success!", text: "User added successfully!",
                    }).then(() => {
                        clearForm();
                    });

                } else {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. Please try again.",
                    }).then(() => {
                        clearForm();
                    })
                }
            }
        } catch (error) {
            // Handle errors during the user addition process
            console.error('Error during user addition:', error);

            // Show an error message based on the type of error
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Error during user addition",
            }).then(() => {
                clearForm();
            });
        }
    };

    const clearForm = () => {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    };

    const validateSubmission = () => {
        if (username && password && confirmPassword && password === confirmPassword) {
            // You can add more validation logic if needed
            console.log("Valid Inputs");
            return true;
        } else {
            Swal.fire({
                icon: "error", title: "Invalid Inputs", text: "Please enter valid inputs",
            });
            return false;
        }
    };


    return (
        <div className={'w-[100vw] h-[100vh]'}>
            <br/>
            <p className={'text-[25px] text-[#071722] text-center mt-12'}>Sign Up</p>
            <p className={'text-[15px] text-[#071722] text-center'}>Create an account to continue</p>
            <div className="w-3/5 m-auto border border-gray-200 rounded-xl flex bg-gray-50 py-10">
                <div className={' w-[60%] m-auto'}>
                    <img src={'public/instituteLogo.png'} alt="Logo"/>
                </div>
                <div className="flex flex-col justify-center items-center mt-12 mr-14 text-[14px]">
                    <div className="col-4">
                        <div className="form-group">
                            <Input
                                type="email"
                                name="email"
                                label="Email"
                                optional={false}
                                callBack={handleUsernameChange}
                                placeholder='Email Address here'
                            />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="form-group">
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                optional={false}
                                callBack={handlePasswordChange}
                                placeholder='Password here'
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <Input
                                type="password"
                                name="confirmPassword"
                                label="Confirm Password"
                                optional={false}
                                callBack={handlePasswordConfirmChange}
                                placeholder='Confirm Password here'
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
                            text={'Register Now'}
                            onClick={addUser}
                        />
                        <br/>
                        <p className={'mb-10'}>
                            {/*Already have an account?*/}
                            {/*<Link to="/login" className='btn btn-outline-dark col-12'> <span*/}
                            {/*    className={'text-blue-500'}> Login</span></Link>*/}
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>);
};

export default Signup;