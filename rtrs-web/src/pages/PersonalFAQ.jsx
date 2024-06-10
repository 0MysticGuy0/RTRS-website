import { useEffect, useMemo, useState } from 'react';
import Footer from '../components/footer/Footer';
import HeaderSmall from '../components/header/HeaderSmall';
import '../styles/App-authorized.css'
import NavPannel from '../components/NavPannel/NavPannel';
import { useFetching } from '../hooks/useFetching';
import APIService from '../API/APIService';
import Loading from '../components/loading/Loading';
import Question from '../components/question/Question';

function PersonalFAQ(){
    const [userData, setUserData] = useState({email:'', password:'', name:'Влад', phone:'', address:'Благо', gender:''})

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

    return (
        <div className='page appeals-page'>
            <HeaderSmall userData={userData}/>

            <div className='page__content'>
                <NavPannel />

                <h2>Типовые вопросы</h2>

                { isLoadingQuestions?
                    <Loading/> :
                    questions.map(item => (
                        <Question key={item.id} question={item.question} answer={item.answer}/>
                    ))
                }
                
            </div>

            <Footer showFAQ={false}/>
        </div>
    )
}

export default PersonalFAQ;