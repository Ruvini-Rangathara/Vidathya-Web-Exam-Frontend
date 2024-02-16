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

function createData(
    id: number,
    name: string,
    email: string
) {
    return {id, name, email};
}

const rows = [
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
    createData(1,'Ruvini Rangathara', 'ruvini925@gmail.com'),
];


const Teacher = () => {
    return (
        <div>
            <Navbar/>
            <div className={'w-[83%] h-screen top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>
                <div
                    className={'w-[85%] h-[90%] flex flex-col mt-8  bg-[white] rounded-2xl shadow-sm p-8 pt-4 mx-auto'}>

                    <label className={'text-2xl text-center mb-6'}>Teachers</label>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 700}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID</StyledTableCell>
                                    <StyledTableCell>Full Name</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell>{row.name}</StyledTableCell>
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
