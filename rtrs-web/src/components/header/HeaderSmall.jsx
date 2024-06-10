import React from "react";
import styles from './HeaderSmall.module.css'
import '../../styles/App-authorized.css'
import VisionProblemsBtn from "../vision-problems-btn/VisionProblemsBtn";
import { Link, useNavigate } from "react-router-dom";

function HeaderSmall({onVisionActivated, userData}){
    const nav = useNavigate()
    function goMain(){
        nav('/personal',{replace: true})
    }

    return(
        <header className={styles.header}>
            <div className={styles.header__start} onClick={goMain}>
                <img className={styles.logo} src="/logo-new.svg" alt='логотип компании' width='42px' onClick={goMain}/>
                
                <span className={styles.name}>КАБИНЕТ ТЕЛЕЗРИТЕЛЯ</span>
            </div>

            <VisionProblemsBtn style={{alignSelf:'stretch'}} onClick={onVisionActivated}/>

            <div className={styles.header__end}>
                <span className={(styles.headerInfo+' '+styles.bold)}>
                    ГОРЯЧАЯ ЛИНИЯ:
                </span>
                <a href='tel:88002202002' className={(styles.headerInfo+' '+styles.bold+' '+styles.phoneBtn)}>
                    8-800-220-20-02
                </a>

                <div className={styles.account}>
                    <img className={styles.account__icon} width='20px' src="/account.png" alt="иконка аккаунта" />
                    <Link className={styles.headerInfo+' '+styles.accountBtn} to='/'>{userData?.name}</Link>
                    <span className={(styles.headerInfo+' '+styles.logOutBtn)} >Выход</span>
                </div>
            </div>
        </header>
    )
}

export default HeaderSmall;