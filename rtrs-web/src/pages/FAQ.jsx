import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useMemo, useState } from "react";
import Question from "../components/question/Question";
import { useFetching } from "../hooks/useFetching";
import APIService from "../API/APIService";
import Loading from "../components/loading/Loading";


function FAQ(){
    const [questions, setQuestions] = useState([])

    //fetchers
    const [fetchQuestions, isLoadingQuestions, questionsError] = useFetching(async () =>{
        const responce = await APIService.getAllQuestions()
        console.log('fetched ', responce)
        setQuestions([...responce.data])
    })

    //initializers

    useEffect(()=>{
        fetchQuestions()
    },[])
    //

    return(
        <div className="page faq-page">
            <Header/>

            <div className='faq__content'>
                <Link className='toLoginBtn' to='/login'>Войти в кабинет</Link>

                <hr/>

                <span className='faq__title'>Типовые вопросы</span>

                {isLoadingQuestions?
                    <Loading/> :
                    questions.map(item => (
                        <Question key={item.question} question={item.question} answer={item.answer}/>
                    ))
                }
                
            </div>

            <Footer/>
        </div>
    )
}

export default FAQ;