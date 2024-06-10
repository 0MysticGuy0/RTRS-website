import React, { useEffect, useMemo } from "react";
import styles from './NavPannel.module.css'
import { useLocation, useNavigate } from "react-router-dom";

function NavPannel({active}){
    const nav = useNavigate()

    const currentTab = useLocation().pathname
    console.log(currentTab)

    const tabs = useMemo(()=>[
        {name:'Работа объектов вещания', path:'/personal/objects-info'},
        {name:'Обращения', path:'/login'},
        {name:'Типовые вопросы', path:'/a'},
        {name:'Телепрограмма', path:'/b'},
        {name:'Настройки', path:'/c'},
    ],[])

    function goAnotherTab(path){
        if(currentTab !== path){
            console.log('Going to ', path)
            nav(path, {replace:true})
        }
    }

    return (
        <nav className={styles.navPannel}>
            <ul className={styles.menu}>
                {tabs.map((tab) => (
                    <li className={currentTab == tab.path?styles.active+' '+styles.element:styles.element} 
                        onClick={()=>{goAnotherTab(tab.path)}}
                        key={tab.path}>
                            {tab.name}
                    </li>
                ))}
            </ul>
            <div className={styles.navPannel__open}>
                <svg className={styles.rightBtn} fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330" >
                    <g id="XMLID_88_">
                        <path id="XMLID_89_" d="M304.394,139.394l-139.39,139.393L25.607,139.393c-5.857-5.857-15.355-5.858-21.213,0.001
                            c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
                            c5.858-5.858,5.858-15.355,0-21.213C319.749,133.536,310.251,133.535,304.394,139.394z"/>
                        <path id="XMLID_90_" d="M154.398,190.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
                            c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,19.393
                            c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,190.607z"/>
                    </g>
                </svg>
            </div>
        </nav>
    )
}

export default NavPannel;