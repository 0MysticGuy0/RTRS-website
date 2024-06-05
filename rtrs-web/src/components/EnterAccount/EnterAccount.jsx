import MyInput from "../UI/MyInput/MyInput";
import '../../styles/App.css'
import { Link } from "react-router-dom";

function EnterAccount({userData, setUserData, rememberUser, setRememberUser,setIsregistrating, showPassword, setShowPassword}){
    return(
        <div className="login-page__right">
        <div className='login'>
            <span className="login__title">ВХОД</span>
            <hr/>
            <MyInput value={userData.email} type="email" placeholder="Электронная почта" 
                onChange={(val) => setUserData({...userData, email:val})}/>

            <div className='login__password'>
                <MyInput value={userData.password} type={showPassword?'text':'password'} placeholder="Пароль"
                    onChange={(val) => setUserData({...userData, password:val})}/>
                <img 
                    onClick={() => setShowPassword(!showPassword)}
                    className={(showPassword?'login__showPasswordBtn active':'login__showPasswordBtn')}
                    width='30px' src='/eye.png' alt='кнопка показать или скрыть пароль'/>
            </div>

            <button className="login__btn" onClick={()=> {console.log(userData)}}>ВОЙТИ</button>

            <div className="login__extra">
                <div className="remember">
                    <input type='checkbox'  checked={rememberUser} name='remember' onChange={(val)=>setRememberUser(val.target.checked)}/>
                    <span className="remember__text">Запомнить меня</span>
                </div>

                <Link className='remember__forgotPasswd' to='/passwd-restore'>Забыли пароль?</Link>
            </div>
        </div>
        
        <div className='register'>
            <div className="register-btn" onClick={()=>setIsregistrating(true)}>
                <span className='register-btn__text'>Регистрация</span>
                <svg className='register-btn__icon' 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"><path fill="currentColor" d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"/>
                </svg>
            </div>
            <div className="register-info">
                <span className='register-info__text'>Возможности: </span>
                <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}> 
                    <a href='#' className="drawable-left register-info__text-btn" title='Информация будет доступна после регистрации'>Информация о вещани</a>
                    <a href='#' className="drawable-left drawabale-left--doc register-info__text-btn" title='Информация будет доступна после регистрации'>Электронные обращения</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EnterAccount;