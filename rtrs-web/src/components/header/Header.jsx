import React from "react";
import styles from './Header.module.css'
import '../../styles/App.css'
import VisionProblemsBtn from "../vision-problems-btn/VisionProblemsBtn";
import { useNavigate } from "react-router-dom";

function Header({onVisionActivated}){
    const nav = useNavigate()
    function goMain(){
        nav('/login',{replace: true})
    }

    return(
        <header className={styles.header}>
            <img className={styles.logo} src="/header-logo.png" alt='логотип компании' width='194px' onClick={goMain}/>
            
            <h1>КАБИНЕТ ТЕЛЕЗРИТЕЛЯ</h1>

            <div className={styles.header__end}>
                <VisionProblemsBtn onClick={onVisionActivated}/>
                <span className={(styles.headerInfo+' '+styles.bold)} style={{fontSize:'var(--subnormal-size)'}}>
                    ГОРЯЧАЯ ЛИНИЯ:
                </span>
                <a href='tel:88002202002' className={(styles.headerInfo+' '+styles.bold+' '+styles.phoneBtn)} style={{fontSize:'var(--subnormal-size)'}}>
                    8-800-220-20-02
                </a>
            </div>
        </header>
    )
}

export default Header;