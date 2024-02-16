import Navbar from "./navbar.tsx";
import Searchbar from "./searchbar.tsx";
import React, { useState } from "react";
import { Button, Pagination } from "@nextui-org/react";

const Paper = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [question, setQuestion] = useState('');

    const qCount = 20;
    const handlePageChange = (page) => {
        setCurrentPage(page);
        setQuestion("loream "+page);


    };

    const renderPaginationNumbers = () => {
        const numbers = [];
        for (let i = 1; i <= qCount; i++) {
            numbers.push(
                <Button
                    key={i}
                    size="sm"
                    variant={currentPage === i ? "flat" : "ghost"}
                    color={currentPage === i ? "secondary" : "default"}
                    style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: currentPage === i ? "#5A294C" : "white",
                        borderRadius:"20px"
                    }}
                    onPress={() => handlePageChange(i)}
                >
                    {i}
                </Button>
            );
        }
        return numbers;
    };

    return (
        <>
            <Navbar />
            <div className={'w-[83%] h-screen top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>
                <Searchbar />
                <div className={'w-[85%] h-[85%] flex flex-col mt-2 bg-[white] rounded-2xl shadow-sm p-8 pt-4 mx-auto'}>

                    <span className={'text-center text-xl text-[#5A294C]'}>Exam Title</span>
                    <span className={'text-end text-lg '}>Duration - 60min</span>

                    <div className={'w-[90%] h-[60%] bg-[white] border rounded-xl m-auto justify-center pt-6 px-4'}
                         style={{ overflow: 'auto' }}
                    >
                        <p className={'text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus accusantium animi aut, earum enim error esse et
                            explicabo fugiat harum id magnam optio pariatur quidem
                            repellendus, tenetur unde, veritatis voluptates.
                        </p>

                        <p id={'q'}> {question}</p>

                        <div className={'flex flex-col gap-3 mt-4 mb-8 justify-center items-center'}>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option1" name="option" value="option1"/>
                                <label htmlFor="option1">Option 1 : veritatis voluptates. </label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option2" name="option" value="option2"/>
                                <label htmlFor="option2">Option 2 : veritatis voluptates.</label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option3" name="option" value="option3"/>
                                <label htmlFor="option3">Option 3 :  veritatis voluptates.</label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option4" name="option" value="option4"/>
                                <label htmlFor="option4">Option 4 : veritatis voluptates.</label>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col gap-3 mb-0">
                        <p className="text-lg text-default-500 text-center">Question No : {currentPage}</p>

                        {/*<Pagination*/}
                        {/*    style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', margin: 'auto' }}*/}
                        {/*    total={10}*/}
                        {/*    color="secondary"*/}
                        {/*    page={currentPage}*/}
                        {/*    onChange={handlePageChange}*/}
                        {/*/>*/}

                        <div className={'flex justify-between mx-4'}>
                            {renderPaginationNumbers()}
                        </div>


                        <div className="flex justify-between">
                            <Button
                                size="sm"
                                variant="flat"
                                onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                                style={{
                                    border: '1px solid #AAAAAA',
                                    backgroundColor: '#AAAAAA',
                                    color: 'white',
                                    padding: '1px 15px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    marginLeft: 20
                                }}
                            >
                                Previous
                            </Button>

                            <Button
                                size="sm"
                                variant="flat"
                                style={{
                                    border: '1px solid #5A294C',
                                    backgroundColor: '#5A294C',
                                    color: 'white',
                                    padding: '1px 15px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    marginRight: 20
                                }}
                                onPress={() => setCurrentPage((prev) => (prev < qCount ? prev + 1 : prev))}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Paper;
