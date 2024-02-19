import Navbar from "./navbar.tsx";
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Searchbar from "./searchbar.tsx";
import Cookies from "js-cookie";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id,nic, name, email) {
    return { id,nic, name, email };
}


const Teacher = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        loadTeachers();
    }, []);

    const loadTeachers = () => {
        // fetch teachers from the backend
        const ACCESS_TOKEN = 'Bearer ' + Cookies.get("token");
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': ACCESS_TOKEN
        };

        fetch("http://localhost:9091/api/v1/user/all?role=teacher", { headers: headers })
            .then(r => {

                if (r.status === 200) {
                    r.json().then(data => {
                        const teacherData = data.data.map(teacher =>
                            createData(teacher.id, teacher.name, teacher.nic, teacher.email));
                        setTeachers(teacherData);
                        {teachers.map((row) => (
                            console.log("Data row  : ",JSON.stringify(row))
                        ))}
                    });
                } else {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                    });
                }
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <Navbar/>
            <div className={'w-[83%] h-screen top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>
                <Searchbar/>
                <div
                    className={'w-[85%] h-[85%] flex flex-col mt-2  bg-[white] rounded-2xl shadow-sm p-8 pt-4 mx-auto'}>

                    <label className={'text-2xl text-center mb-4'}>Teachers</label>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 700}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID</StyledTableCell>
                                    <StyledTableCell>NIC</StyledTableCell>
                                    <StyledTableCell>Full Name</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {teachers.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell>{row.name}</StyledTableCell>
                                        <StyledTableCell>{row.nic}</StyledTableCell>
                                        <StyledTableCell>{row.email}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>
        </div>
    );
}

export default Teacher;
