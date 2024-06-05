import { useState } from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MySelect from '../UI/MySelect/MySelect';
import styles from './RegistrationDialog.module.css'
import { Link } from 'react-router-dom';

function RegistrationDialog({userData, setUserData}){
    const [acceptedPolicy, setAcceptedPolicy] = useState(true)

    return (
        <form action='#' method='post' className={styles.root}>
            <span className={styles.title}>РЕГИСТРАЦИЯ</span>
            <hr/>
                <table>
                    <tbody>
                        <tr>
                            <td title='Логин и пароль будут отправлены на указанный Вами адрес электронной почты' 
                                className={styles.bold}>Электронная почта</td>
                            <td> <MyInput required type='text' placeholder='email@gmail.com' value={userData.email} onChange={val => setUserData({...userData, email:val})}/> </td>
                        </tr>
                        <tr>
                            <td className={styles.bold}>Имя</td>
                            <td> <MyInput type='text' placeholder='имя' value={userData.name} onChange={val => setUserData({...userData, name:val})}/> </td>
                        </tr>
                        <tr>
                            <td className={styles.bold}>Пол</td>
                            <td> <MySelect defaultValue='Пол' value={userData.gender} onChange={val => setUserData({...userData, gender:val})}
                                options={[{value:'M', name:'Мужской'}, {value:'F', name:'Женский'}]}/> </td>
                        </tr>
                        <tr>
                            <td className={styles.bold}>Номер телефона</td>
                            <td> <MyInput type='tel' placeholder='89000000000' value={userData.phone} onChange={val => setUserData({...userData, phone:val})}/> </td>
                        </tr>
                        <tr>
                            <td className={styles.bold}>Адрес</td>
                            <td> <MyInput type='tel' placeholder='' value={userData.address} onChange={val => setUserData({...userData, address:val})}/> </td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.acceptance}>
                    <input type='checkbox'  checked={acceptedPolicy} name='accept' onChange={(val)=>setAcceptedPolicy(val.target.checked)}/>
                    <span className={styles.acceptance__text}>
                        Я принимаю условия <Link to='/agreement'>Пользовательского соглашения</Link><br/> и даю своё согласие на обработку моей учётной информации
                    </span>
                </div>

                <button disabled={!acceptedPolicy} className={styles.registerBtn}
                onClick={(e) => {
                    console.log(userData)
                }}>
                    Зарегистрироваться
                </button>
        </form>
    )
}

export default RegistrationDialog;