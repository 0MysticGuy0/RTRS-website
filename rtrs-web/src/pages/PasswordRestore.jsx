import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import '../styles/App.css'
import Footer from '../components/footer/Footer';
import MyInput from '../components/UI/MyInput/MyInput';
import { useState } from 'react';
import APIService from '../API/APIService';

function PasswordRestore(){
    const [email, setEmail] = useState('')

    async function restore(e){
        e.preventDefault()
        console.log(email, typeof email)
        try{
        const responce = await APIService.resetPassword(email)
        console.log(responce)
        alert('На указанный email направлены данные для входа в аккаунт')
        }catch(e){
            console.log('error: ',e)
        }
    }

    return(
        <div className="page restore-page">
            <Header/>

            <div className='restore__content'>
                <Link className='toLoginBtn' to='/login'>Войти в кабинет</Link>

                <hr/>

                <form className='restore__form'>
                    <span className='restore__title' style={{alignSelf:'center'}}>Восстановление пароля</span>
                    <MyInput style={{width:'100%', textAlign:'center'}} required type='email' placeholder='email@gmail.com' value={email} onChange={val => setEmail(val)}/>
                    <span className='restore__info'>Ссылка для восстановления пароля поступит на адрес электронной почты указанный при регистрации</span>
                    <button disabled={email.length<1} style={{width:'100%'}} className="login__btn" onClick={restore}>ВОССТАНОВИТЬ ПАРОЛЬ</button>
                </form>

                <div className='restore_decoration'>
                    <span className='restore_decoration__sym'>*</span>
                    <span className='restore_decoration__sym'>*</span>
                    <span className='restore_decoration__sym'>*</span>
                    <span className='restore_decoration__sym'>*</span>
                </div>
                
            </div>

            <Footer/>
        </div>
    )
}


export default PasswordRestore;