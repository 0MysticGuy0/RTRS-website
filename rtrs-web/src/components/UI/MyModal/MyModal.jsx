import { useEffect, useState } from 'react';
import styles from './MyModal.module.css'

function MyModal({children, visible, setVisible}){
    const modalStyles = [styles.myModal]

    if(visible){
        modalStyles.push(styles.active)
    }

    return (
        <div className={modalStyles.join(' ')} onClick={()=>setVisible(false)}>
            <div className={styles.myModal__content} onClick={e => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;