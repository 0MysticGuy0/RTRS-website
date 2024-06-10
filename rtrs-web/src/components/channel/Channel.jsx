import React from "react";
import styles from './Channel.module.css'

function Channel({name, TVC, frequency, ...params}){
    return(
        <div {...params} className={styles.channel}>
            <div className={styles.top}>
                <span>
                    {name}
                </span>
            </div>
            <div className={styles.bottom}>
                <div className={styles.horizontalDiv}>
                    <span>
                        ТВК:
                    </span>
                    <span>
                        {TVC}
                    </span>
                </div>
                <div className={styles.horizontalDiv}>
                    <span>
                        частота, МГц:
                    </span>
                    <span>
                        {frequency}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Channel;