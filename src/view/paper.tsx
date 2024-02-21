import Navbar from "./navbar.tsx";
import Searchbar from "./searchbar.tsx";
import React, {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import axios from "axios";

const Paper = () => {
    let paperArray ;
    const navigate = useNavigate();

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
    const [currentPage, setCurrentPage] = useState(1);

    const {id} = useParams();

    const [startTime, setStartTime] = useState(null); // Start time of the paper
    const [endTime, setEndTime] = useState(null);
    const [remainingTime, setRemainingTime] = useState(duration * 60000);


    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);


    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        const cPage = Cookies.get("cPage");
        selectedAnswers[cPage-1] = event.target.value;
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(calculateRemainingTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    const calculateRemainingTime = () => {
        if (endTime) {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance <= 0) {
                return 0;
            }
            return distance;
        }
        return null;
    };


    useEffect(() => {
        Cookies.set("cPage",1)
        Cookies.set("previousQ",1)
        loadPaper();
    }, []);

    const loadPaper = () => {
        fetch(`http://localhost:9090/exam/api/v1/paper/get/${id}`)
            .then(r => {
                if (r.status === 200) {
                    r.json().then(data => {
                        const content = data.content;
                        paperArray = content;

                        setTitle(content.title);
                        setDuration(content.time);

                        setQuestions(content.questions);
                        setSubject(content.subject);

                        setCorrectAnswers(content.questions.map(question => question.answer));

                        setQCount(content.questions.length);

                        setQuestion(content.questions[id - 1].question);
                        setOption1(content.questions[id - 1].option1);
                        setOption2(content.questions[id - 1].option2);
                        setOption3(content.questions[id - 1].option3);
                        setOption4(content.questions[id - 1].option4);

                        setAnswer(content.questions[id - 1].answer);

                        const now = new Date();
                        setStartTime(now);
                        const end = new Date(now.getTime() + content.time * 60000);
                        setEndTime(end);

                        // Automatically finish exam when time is up
                        const durationInMilliseconds = end.getTime() - now.getTime();
                        setTimeout(() => finishExam(), durationInMilliseconds);
                    });
                } else {
                    console.log("Error : ", r);
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    const calculateMarks = () =>{
        // console.log("selected answers : //////////////////////////////////////////" )
        // console.log(paperArray)
        //
        // console.log("selected answers : ========================================" )
        // console.log("selectedAnswers : ",selectedAnswers)
        //
        // console.log("paper array : //////////////////////////////////////////" )
        // console.log(paperArray.description); // "Test your Java programming skills with this quiz."
        // console.log(paperArray.id); // 9
        // console.log(paperArray.nic); // "200076900989"
        // console.log(paperArray.subject); // "Java Test"
        // console.log(paperArray.time); // 1
        // console.log(paperArray.title); // "Java Programming Quiz 1min"
        //
        // const questionIndex = 0; // Index of the question you want to access
        // console.log(paperArray.questions[questionIndex].question); // "Which keyword is used to define a constant in Java?"
        // console.log(paperArray.questions[questionIndex].answer);

        //iterate through the questions and compare the answers
        let score = 0;
        for (let i = 0; i < paperArray.questions.length; i++) {
            let ans ;
            if(selectedAnswers[i] === 'option1'){
                ans= paperArray.questions[i].option1;
            }else if(selectedAnswers[i] === 'option2'){
                ans= paperArray.questions[i].option2;
            }else if(selectedAnswers[i] === 'option3'){
                ans= paperArray.questions[i].option3;
            }else if(selectedAnswers[i] === 'option4'){
                ans= paperArray.questions[i].option4;
            }

            // console.log("Answer : "+(i+1)+" "+ans)
            // console.log("Correct Answer : "+(i+1)+" "+paperArray.questions[i].answer)

            if (ans === paperArray.questions[i].answer) {
                score++;
            }
        }

        console.log("length : ", paperArray.questions.length)
        return (score / paperArray.questions.length) * 100;
    }



    const finishExam = () => {
        const score = calculateMarks();

        Swal.fire({
            title: 'Exam Completed!',
            text:  'Your Score: '+score,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                if(score===0){
                    Swal.fire({
                        title: 'You have not answered any questions!',
                        text:  'Please try again.',
                        icon: 'warning',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/exam');
                        }
                    });
                }else{
                    addToMyExam(score);
                }
                navigate('/exam');
            }
        });

    };

    const addToMyExam = (score) => {
        const nic = Cookies.get("nic");
        const exam = {
            "paperId": paperArray.id,
            "subject": paperArray.subject,
            "time": paperArray.time,
            "score": score,
            "nic": nic
        };

        axios.post('http://localhost:9090/exam/api/v1/myexam/add', exam)
            .then(response => {
                if (response.status === 200) {
                    console.log("Exam added to my exams");
                }
            })
            .catch(error => {
                console.log(error);
            });

    }

    const formatTime = (time) => {
        return time ? time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'}) : '';
    };


    const handlePageChange = (page) => {
        // selectedAnswers[Cookies.get("cPage")-1] = selectedOption;
        Cookies.set("cPage",page)

        setCurrentPage(page);
        setQuestion(questions[page - 1].question);

        setOption1(questions[page - 1].option1);
        setOption2(questions[page - 1].option2);
        setOption3(questions[page - 1].option3);
        setOption4(questions[page - 1].option4);

        setAnswer(questions[page - 1].answer);

        Cookies.set("previousQ", page);
        setSelectedOption('');

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

    const closeForm = () => {
        navigate('/exam')
    }

    const formatRemainingTime = () => {
        if (remainingTime !== null) {
            const minutes = Math.floor(remainingTime / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        return '';
    };


    return (
        <>
            <Navbar/>
            <div className={'w-[83%] h-screen top-0 ml-[17%] bg-[#E8D2E2] flex flex-col'}>
                <Searchbar/>
                <div className={'w-[85%] h-[85%] flex flex-col mt-2 bg-[white] rounded-2xl shadow-sm p-8 pt-4 mx-auto'}>

                    <div className={'flex justify-between mt-2'}>
                        <span
                            className={'text-center w-full text-xl text-[#5A294C]'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title}
                        </span>
                        <span>
                            <button className={'px-2 py-1 bg-[#F5F5F5] text-[gray] rounded-full'}
                                    onClick={closeForm}> X </button>
                        </span>
                    </div>

                    <span className={'text-center text-lg text-[gray]'}>
                        {subject} ( Duration - {duration} min)
                    </span>

                    <div className={'flex justify-between my-2'}>
                        <div className={'text-start'}>
                            <h2>Start Time: {formatTime(startTime)}</h2>
                            <h2>End Time: {formatTime(endTime)}</h2>
                        </div>
                        <span
                            className={'rounded-md h-8 text-center px-2 text-[#5A294C] bg-[#F9C6EA] text-lg '}>Remaining Time: {formatRemainingTime()}</span>
                    </div>

                    <div
                        className={'w-[90%] h-[60%] bg-[white] border flex flex-col rounded-xl m-auto justify-center pt-6 px-4'}
                        style={{overflow: 'auto'}}
                    >
                        <p className={'text-center mb-6'}>{question}</p>

                        <div className={'flex flex-col mx-auto gap-3 mt-4 mb-8 items-start'}>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option1" name="option" value="option1"
                                       className={'w-4 h-4'}
                                       checked={selectedOption === "option1"}
                                       onChange={handleOptionChange}
                                />
                                <label htmlFor="option1">Option 1 : {option1} </label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option2" name="option" value="option2"
                                       className={'w-4 h-4'}
                                       checked={selectedOption === "option2"}
                                       onChange={handleOptionChange}
                                />
                                <label htmlFor="option2">Option 2 : {option2}</label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option3" name="option" value="option3"
                                       className={'w-4 h-4'}
                                       checked={selectedOption === "option3"}
                                       onChange={handleOptionChange}
                                />
                                <label htmlFor="option3">Option 3 : {option3}</label>
                            </div>
                            <div className={'flex gap-3'}>
                                <input type="radio" id="option4" name="option" value="option4"
                                       className={'w-4 h-4'}
                                       checked={selectedOption === "option4"}
                                       onChange={handleOptionChange}
                                />
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
                                onPress={() => {
                                    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
                                    handlePageChange(currentPage - 1);
                                }}
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
                                onPress={() => {
                                    setCurrentPage(prev => (prev < qCount ? prev + 1 : prev));
                                    handlePageChange(currentPage + 1);
                                }}
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
