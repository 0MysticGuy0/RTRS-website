import { useState } from 'react';
import styles from './Question.module.css'

function Question({question, answer}){
    const [opened, setOpened] = useState(false)

    const curStyles = [styles.question]
    if(opened){
        if(opened){
            console.log('123131231')
        }
        curStyles.push(styles.active)
    }

    return (
        <div className={curStyles.join(' ')}>
            <div className={styles.question__head} onClick={()=>setOpened(!opened)}>
                <img className={styles.question__icon} src='/top.png' width='20px' alt='посмотреть ответ'/>
                {question}
            </div>
            <div className={styles.question__body}>
                {answer}
                <hr/>
            </div>
        </div>
    )
}

export default Question;