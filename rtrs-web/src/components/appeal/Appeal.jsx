import React from "react";
import styles from './Appeal.module.css'

function Appeal({id, time, status, type, address, content, ...params}){
    return(
        <div {...params} className={styles.appeal}>
            <div className={styles.top}>
                <div className={styles.verticalDiv}>
                    <span style={{fontSize:'var(--part-size)', fontWeight:'700'}}>
                        {'#'+id}
                    </span>
                    <span>
                        {time}
                    </span>
                </div>

                <div className={styles.verticalDiv} style={{}}>
                    <span>
                        {type}
                    </span>
                    <hr/>
                    <span>
                        {address}
                    </span>
                </div>
            </div>

            <div className={styles.bottom}>
                    <span className={styles.textContent}>
                        {content}
                    </span>
                    <span>
                        {status}
                    </span>     
            </div>
        </div>
    )
}

export default Appeal;