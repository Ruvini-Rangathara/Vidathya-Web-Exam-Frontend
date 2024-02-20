import Navbar from "./navbar.tsx";
import Searchbar from "./searchbar.tsx";
import React, {useEffect, useState} from "react";
import {Button, Pagination} from "@nextui-org/react";
import {useParams} from "react-router-dom";

const Paper = () => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [questions, setQuestions] = useState([]);
    const [subject, setSubject] = useState('');
    const [qCount, setQCount] = useState(0);

    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');

    const [answer, setAnswer] = useState('');

    const {id} = useParams();

    useEffect(() => {
        console.log("Paper id of paper : ", id);
        loadPaper();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);

    const loadPaper = () => {
        fetch(`http://localhost:9090/exam/api/v1/paper/get/${id}`)
            .then(r => {
                if (r.status === 200) {
                    r.json().then(data => {
                        const content = data.content;
                        setTitle(content.title);
                        setDuration(content.duration);
                        setQuestions(content.questions);
                        setSubject(content.subject);
                        setQCount(content.questions.length);

                        setQuestion(content.questions[id - 1].question);
                        setOption1(content.questions[id - 1].option1);
                        setOption2(content.questions[id - 1].option2);
                        setOption3(content.questions[id - 1].option3);
                        setOption4(content.questions[id - 1].option4);

                        setAnswer(content.questions[id - 1].answer);
                    });
                } else {
                    console.log("Error : ", r);
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setQuestion(questions[page - 1].question);

        setOption1(questions[page - 1].option1);
        setOption2(questions[page - 1].option2);
        setOption3(questions[page - 1].option3);
        setOption4(questions[page - 1].option4);

        setAnswer(questions[page - 1].answer);


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
                        borderRadius: "20px"
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
            <Navbar/>
            <div className={'w-[83%] h-screen top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>
                <Searchbar/>
                <div className={'w-[85%] h-[85%] flex flex-col mt-2 bg-[white] rounded-2xl shadow-sm p-8 pt-4 mx-auto'}>

                    <div className={'flex justify-between'}>
                        <span className={'text-center w-full text-xl text-[#5A294C]'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title}</span>
                        <span>
                            <button className={'px-2 py-1 bg-[#F5F5F5] text-[gray] rounded-full'}> X </button>
                        </span>
                    </div>


                    <span className={'text-center text-lg text-[#5A294C]'}>{subject}</span>
                    <span className={'text-end text-lg '}>Duration - {duration} min</span>

                    <div className={'w-[90%] h-[60%] bg-[white] border rounded-xl m-auto justify-center pt-6 px-4'}
                         style={{overflow: 'auto'}}
                    >
                        <p className={'text-center'}>{question}</p>

                        <div className={'flex flex-col gap-3 mt-4 mb-8 items-start'}>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option1" name="option" value="option1"/>
                                <label htmlFor="option1">Option 1 : {option1} </label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option2" name="option" value="option2"/>
                                <label htmlFor="option2">Option 2 : {option2}</label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option3" name="option" value="option3"/>
                                <label htmlFor="option3">Option 3 : {option3}</label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option4" name="option" value="option4"/>
                                <label htmlFor="option4">Option 4 : {option4}</label>
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


                        <div className={'w-full flex justify-center items-center'}>
                            <div className={'flex mx-12 gap-8'} style={{justifyContent: 'flex-start'}}>
                                {renderPaginationNumbers()}
                            </div>
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
