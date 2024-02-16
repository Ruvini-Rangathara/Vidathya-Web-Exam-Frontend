import React from 'react';
import GridItem from './component/grid-item.tsx';
import Navbar from "./navbar.tsx";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Searchbar from "./searchbar.tsx";

interface GridItemProps {
    id: number;
    title: string;
    description: string;
    time: string;
}

// Sample data for GridItem
const data: GridItemProps[] = [
    {
        id: 1,
        title: 'Java',
        description: 'ipsum dolor sit amet,consectetur adipisicing elit. ' +
            'Ea eos ex ipsaipsum iure maiores mollitia nisi nostrum perferendis',
        time: '60min'
    },
    {
        id: 2,
        title: 'Python',
        description: 'ipsum dolor sit amet,consectetur adipisicing elit. ' +
            'Ea eos ex ipsaipsum iure maiores mollitia nisi nostrum perferendis',
        time: '60min'
    },
    {
        id: 3,
        title: 'C++',
        description: 'ipsum dolor sit amet,consectetur adipisicing elit. ' +
            'Ea eos ex ipsaipsum iure maiores mollitia nisi nostrum perferendis',
        time: '60min'
    },
    {
        id: 4,
        title: 'C#',
        description: 'ipsum dolor sit amet,consectetur adipisicing elit. ' +
            'Ea eos ex ipsaipsum iure maiores mollitia nisi nostrum perferendis',
        time: '60min'
    },
    {
        id: 5,
        title: 'JavaScript',
        description: 'ipsum dolor sit amet,consectetur adipisicing elit. ' +
            'Ea eos ex ipsaipsum iure maiores mollitia nisi nostrum perferendis',
        time: '60min'
    },
    {
        id: 6,
        title: 'HTML',
        description: 'ipsum dolor sit amet,consectetur adipisicing elit. ' +
            'Ea eos ex ipsaipsum iure maiores mollitia nisi nostrum perferendis',
        time: '60min'
    },
    {
        id: 7,
        title: 'CSS',
        description: 'ipsum dolor sit amet,consectetur adipisicing elit. ' +
            'Ea eos ex ipsaipsum iure maiores mollitia nisi nostrum perferendis',
        time: '60min'
    },
    {
        id: 8,
        title: 'ReactJS',
        description: 'ipsum dolor sit amet,consectetur adipisicing elit. ' +
            'Ea eos ex ipsaipsum iure maiores mollitia nisi nostrum perferendis',
        time: '60min'
    },
];

const handleItemClick = (id: number) => {
    console.log('GridItem clicked ', id);

};

const Exam = () => {
    return (
        <>
            <Navbar/>
            <div className={'w-[83%] h-screen top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>
                <Searchbar/>
                <h1 className={'text-[2rem] text-[#5A294C] ml-12 mb-6'}>Exam</h1>
                <div className={'w-[100%] '}>
                    <Box sx={{ width: '80%', margin:'auto'}}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {data.map((item: GridItemProps) => (
                                <Grid item xs={6} key={item.id}>
                                    <GridItem
                                        title={item.title}
                                        description={item.description}
                                        time={item.time}
                                        onClick={() => handleItemClick(item.id)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    );
}

export default Exam;
