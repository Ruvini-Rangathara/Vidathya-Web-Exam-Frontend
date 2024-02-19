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
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
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

const MyExam = () => {
    const [myExam, setMyExam] = useState([]);

    useEffect(() => {
        loadMyExams();
    }, []);

    function createData(
        id: number,
        subject: string,
        time: number,
        score: number
    ) {
        return {id, subject, time, score};
    }

    const loadMyExams = () => {
        const nic = Cookies.get("nic");

        fetch("http://localhost:9090/exam/api/v1/myexam/getAll/" + nic)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                const myExamData = data.content.map(myExam =>
                    createData(myExam.id, myExam.subject, myExam.time, myExam.score));
                setMyExam(myExamData);
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong. Please try again."
                });
            });
    };



    return (
        <div>
            <Navbar/>
            <div className={'w-[83%] h-screen top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>
                <Searchbar/>
                <div
                    className={'w-[85%] h-[85%] flex flex-col mt-6  bg-[white] rounded-2xl shadow-sm p-8 pt-4 mx-auto'}>

                    <label className={'text-2xl text-center mb-4'}>Score Board</label>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 700}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp; ID</StyledTableCell>
                                    <StyledTableCell>Title</StyledTableCell>
                                    <StyledTableCell>Duration</StyledTableCell>
                                    <StyledTableCell>Score</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {myExam.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">&nbsp;&nbsp;&nbsp;&nbsp;
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell>{row.subject}</StyledTableCell>
                                        <StyledTableCell>{row.time} min</StyledTableCell>
                                        <StyledTableCell>{row.score}</StyledTableCell>
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

export default MyExam;
