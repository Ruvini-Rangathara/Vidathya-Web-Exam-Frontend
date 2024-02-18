import Navbar from "./navbar.tsx";
import Input from "./component/input.tsx";
import CustomButton from "./component/CustomButton.tsx";
import Searchbar from "./searchbar.tsx";
import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();

    const [deleteButton, setEnable] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [nic, setNic] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setEnable(false)
    }, []);

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'name':
                setName(e.target.value);
                break;
            case 'nic':
                setNic(e.target.value);
                break;
            case 'oldPassword':
                setOldPassword(e.target.value);
                break;
            case 'newPassword':
                setNewPassword(e.target.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value);
                break;

            default :
                break;
        }
    }

    const clearForm = () => {
        setEmail("");
        setName("");
        setNic("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
    }

    const validateSubmission = () => {
        if (email && name && name && nic && oldPassword && newPassword && confirmPassword) {
            if (newPassword !== confirmPassword) {
                Swal.fire({
                    icon: "error", title: "Invalid Inputs", text: "Passwords do not match"
                }).then(r => {
                    console.log(r);
                });
                return false;
            }
            return true;
        } else {
            Swal.fire({
                icon: "error", title: "Invalid Inputs", text: "Please enter valid inputs"
            }).then(r => {
                console.log(r);
            });
            return false;
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchUser();
        }
    };

    const closeForm = () => {
        navigate('/home')
    }
    const searchUser = () => {
        const ACCESS_TOKEN = 'Bearer ' + Cookies.get("token");
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': ACCESS_TOKEN
        }

        axios.get('http://localhost:9091/api/v1/user/get', {headers: headers})
            .then((response) => {
                if (response.status === 200) {
                    if (response.data) {
                        const userData = response.data.data[0];

                        setEmail(userData.email);
                        setName(userData.name);
                        setNic(userData.nic);

                        setEnable(true);

                    } else {
                        console.log('response.data ')
                        console.log("No user data found in response.");
                    }
                } else {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                    });
                }
            })
            .catch((err) => {
                console.log("Error : ", err);
                Swal.fire({
                    icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                });
            });

    }


    const deleteUser = () => {
        const ACCESS_TOKEN = 'Bearer ' + Cookies.get("token");
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': ACCESS_TOKEN
        }

        if (validateSubmission()) {
            axios.delete('http://localhost:9091/api/v1/user/delete', {headers: headers})
                .then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            icon: "success", title: "Success!", text: "User deleted successfully!"
                        });
                        clearForm()
                        setEnable(false )
                    } else {
                        Swal.fire({
                            icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                        });
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                    });
                });
        }
    };

    const updateUser = () => {
        const ACCESS_TOKEN = 'Bearer ' + Cookies.get("token");
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': ACCESS_TOKEN
        }

        console.log("token : ", ACCESS_TOKEN)
        const user = {
            email: email,
            name: name,
            nic: nic,
            password: newPassword,
        };
        console.log("user", user);
        if (validateSubmission()) {
            console.log("validate")
            axios.put("http://localhost:9091/api/v1/user/update", user, {headers: headers})
                .then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            icon: "success", title: "Success!", text: "User updated successfully!"
                        });
                        clearForm()
                        setEnable(false )
                    } else {
                        Swal.fire({
                            icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                        });
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                    });
                });
        } else {
            console.log("Invalid Inputs");
        }
    }


    return (
        <>
            <Navbar/>
            <div className={'w-[83%] top-0 h-screen ml-[17%] bg-[#E8D2E2] flex flex-col text-[14px]'}>
                <Searchbar/>

                <div className={'flex justify-between'}>
                    <h1 className={'text-[2rem] text-[#5A294C] ml-12 opacity-[50%]'}>Settings</h1>
                </div>

                <div
                    className={'w-[60%] h-[80%] justify-around bg-[white] rounded-2xl shadow-md p-8 mx-auto'}>
                    <div className={'flex w-[25vw] m-auto '}>
                        <Input
                            type="email"
                            name="email"
                            label=''
                            optional={true}
                            value={email}
                            callBack={handleInputs}
                            placeholder='Email Address'
                            onKeyDown={handleKeyPress}
                        />
                        <button className={'bg-[#5A294C] text-white rounded mt-2 h-6 px-2 ml-4'}
                                onClick={searchUser}
                        >Search
                        </button>
                    </div>

                    <div className={'w-[65%] h-[90%] bg-transparent p-8 mx-auto'}>

                        <div className={'flex flex-col w-[25vw] mx-auto'}>
                            <div className="col-6">
                                <div className="form-group">
                                    <Input
                                        type="text"
                                        name="name"
                                        label="Full Name"
                                        optional={false}
                                        value={name}
                                        callBack={handleInputs}
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
                                        value={nic}
                                        callBack={handleInputs}
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
                                        value={oldPassword}
                                        callBack={handleInputs}
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
                                        value={newPassword}
                                        callBack={handleInputs}
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
                                        value={confirmPassword}
                                        callBack={handleInputs}
                                        placeholder=''
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={'w-[100%] flex justify-end gap-4 mb-2'}>

                        <CustomButton
                            borderColor={'#5A294C'}
                            bgColor={'white'}
                            hoverColor={'#5A294C'}
                            textColor={'#5A294C'}
                            textHoverColor={'white'}
                            text={'Save'}
                            onClick={updateUser}
                        />

                        <CustomButton
                            borderColor={'#F85F48'}
                            bgColor={'white'}
                            hoverColor={'#F85F48'}
                            textColor={'#F85F48'}
                            textHoverColor={'white'}
                            text={'Delete'}
                            onClick={deleteUser}
                        />

                        <CustomButton
                            borderColor={'#AAAAAA'}
                            bgColor={'white'}
                            hoverColor={'#AAAAAA'}
                            textColor={'#AAAAAA'}
                            textHoverColor={'white'}
                            text={'Cancel'}
                            onClick={closeForm}
                        />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Settings;