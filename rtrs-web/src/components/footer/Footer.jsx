import React from "react";
import styles from './Footer.module.css'
import { Link, useNavigate } from "react-router-dom";

function Footer(){
    const faqNav=useNavigate()

    function goFAQ(){
        faqNav('/faq',{replace:true})
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.right}>
                <img className={styles.logo} src='/logo-rtrs.svg' width='55px' alt='логотип ртрс'/>

                <div className={styles.contacts}>
                    <span className={(styles.text+' '+styles.gray)}>
                        © 2004-2024 РТРС 
                    </span>
                    <a target='_blank' href='https://moscow.rtrs.ru/' className={styles.text}>WWW.RTRS.RU</a>
                </div>
            </div>

            <div className={styles.contactsBtns}>
                <a href='https://t.me/rtrs_info' className={styles.contactBtn}></a>
                <a href='https://rutube.ru/channel/25390185/' className={(styles.contactBtn+' '+styles.rutube)}></a>
                <a href='https://vk.com/rtrs_info' className={(styles.contactBtn+' '+styles.vk)}></a>
                <a href='https://ok.ru/ctv.rtrs' className={(styles.contactBtn+' '+styles.ok)}></a>
            </div>

            <svg className={styles.questionsBtn}
                title='Типовые вопросы'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                onClick={goFAQ}>
                <path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.756 2.756 0 0 1 1.637.525c.503.377.863.965.863 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.103-.067.207-.132.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
            </svg>

            <div className={styles.docs}>
                <Link to='/agreement' className={styles.text}>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</Link>
                <a target='_blank' href='/dataPolicy.pdf' className={styles.text}>ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ В РТРС</a>
            </div>
        </footer>
    )
}

export default Footer;