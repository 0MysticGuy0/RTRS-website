import { useState } from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MySelect from '../UI/MySelect/MySelect';
import styles from './AppealDialog.module.css'
import { Link } from 'react-router-dom';
import MyTextArea from '../UI/MyTextArea/MyTextArea';

function AppealDialog({userData, setUserData, typeOptions, sendAppeal}){
    const [appeal, setAppeal] = useState({type:1, content:'', address:userData.address, time:new Date(), status:2, email: userData.email})


    return (
        <form action='' method='post' className={styles.root}>
            <MyInput required type='hidden' placeholder='email@gmail.com' value={userData.email} onChange={val => setUserData({...userData, email:val})}/>
            <span className={styles.title}>Создание обращения</span>
            <hr/>
                <table>
                    <tbody>
                        <tr>
                            <td className={styles.bold}>Категория</td>
                            <td> <MySelect required defaultValue='Тип обращения' value={appeal.type} onChange={val => setAppeal({...appeal, type:val})}
                                options={typeOptions}/> </td>
                        </tr>
                        <tr>
                            <td className={styles.bold}>Адрес</td>
                            <td> <MyInput style={{width:'100%'}} type='text' disabled placeholder='адрес' value={userData.address} /> </td>
                        </tr>
                        <tr>
                            <td className={styles.bold}>Текст</td>
                            <td> <MyTextArea required rows={3} cols={50} placeholder='' value={appeal.content} onChange={val => setAppeal({...appeal, content:val})}/> </td>
                        </tr>
                        <tr>
                            <td className={styles.bold}>прикрепить файл</td>
                            <td> 
                                <MyInput style={{width:'100%'}} type='file' placeholder='адрес'  onChange={val => console.log(val)}/> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                

                <button disabled={!(appeal.content.length>0 && appeal.type)} className={styles.finishBtn}
                onClick={(e) => {
                    e.preventDefault()
                    sendAppeal(appeal)
                }}>
                    Создать обращение
                </button>
        </form>
    )
}

export default AppealDialog;