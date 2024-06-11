import React, { useContext, useEffect, useRef, useState } from "react";
import '../styles/App.css'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MyModal from "../components/UI/MyModal/MyModal";
import EnterAccount from "../components/EnterAccount/EnterAccount";
import HelpVideo from "../components/HelpVideo/Helpvideo";
import RegistrationDialog from "../components/RegistrationDialog/RegistrationDialog";
import APIService from "../API/APIService";
import { AppContext } from "../context/AppContext";

function Login(){
    const {authed, setAuthed, userData, setUserData} = useContext(AppContext)

    const [activatedVideo, setActivatedVideo] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [rememberUser,setRememberUser] = useState(true)
    const [isRegistrating, setIsregistrating] = useState(false)
    const [enteredWrong, setEnterdWrong] = useState(false)

    const video = useRef(null)

    useEffect(()=>{
        if(video.current && activatedVideo)
            video.current.play()
    },[activatedVideo])


    async function login(){
        const responce = await APIService.login(userData.email, userData.password)
        const pswd = userData.password
        const email = userData.email
        console.log(responce)
        if(responce.data.length < 1){
            setEnterdWrong(true)
        }
        else{
            setUserData(responce.data)
            setAuthed(true)
            localStorage.setItem('auth','true')
            localStorage.setItem('email',email)
            localStorage.setItem('password',pswd)
        }
    }

    async function register(){
        const responce = await APIService.register(userData)
        if(responce.data == null || responce.data.length < 1){
            alert('Уже есть аккаунт с данной почтой!')
        }
        else{
            setIsregistrating(false)
            alert('На указанный email направлены данные для входа в аккаунт')
        }
    }

    return (
        <div className="page login-page">
            <Header/>

            <MyModal visible={isRegistrating} setVisible={setIsregistrating}>
                <RegistrationDialog userData={userData} setUserData={setUserData} onSubmit={register}/>
            </MyModal>
            
            <div className="login-page__content">
                <div className="login-page__up">
                    <div className="login-page__left">
                        <HelpVideo activatedVideo={activatedVideo} setActivatedVideo={setActivatedVideo} videoRef={video}/>
                    </div>
                    <div className="login-page__right">
                        <EnterAccount
                            userData={userData} setUserData={setUserData} enteredWrong={enteredWrong}
                            showPassword={showPassword} setShowPassword={setShowPassword}
                            rememberUser={rememberUser} setRememberUser={setRememberUser}
                            setIsregistrating={setIsregistrating} 
                            login ={login}/>
                    </div>
                </div>

                <div className="login-page__down">

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Login;