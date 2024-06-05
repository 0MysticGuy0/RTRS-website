import React, { useEffect, useRef, useState } from "react";
import '../styles/App.css'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MyInput from "../components/UI/MyInput/MyInput";
import MyModal from "../components/UI/MyModal/MyModal";
import EnterAccount from "../components/EnterAccount/EnterAccount";
import HelpVideo from "../components/HelpVideo/Helpvideo";
import RegistrationDialog from "../components/RegistrationDialog/RegistrationDialog";

function Login(){
    const [activatedVideo, setActivatedVideo] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserData] = useState({email:'', password:'', name:'', phone:'', address:'', gender:''})
    const [rememberUser,setRememberUser] = useState(true)
    const [isRegistrating, setIsregistrating] = useState(false)

    const video = useRef(null)

    useEffect(()=>{
        if(video.current && activatedVideo)
            video.current.play()
    },[activatedVideo])

    return (
        <div className="page login-page">
            <Header/>

            <MyModal visible={isRegistrating} setVisible={setIsregistrating}>
                <RegistrationDialog userData={userData} setUserData={setUserData}/>
            </MyModal>
            
            <div className="login-page__content">
                <div className="login-page__up">
                    <div className="login-page__left">
                        <HelpVideo activatedVideo={activatedVideo} setActivatedVideo={setActivatedVideo} videoRef={video}/>
                    </div>
                    <div className="login-page__right">
                        <EnterAccount
                            userData={userData} setUserData={setUserData}
                            showPassword={showPassword} setShowPassword={setShowPassword}
                            rememberUser={rememberUser} setRememberUser={setRememberUser}
                            setIsregistrating={setIsregistrating} />
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