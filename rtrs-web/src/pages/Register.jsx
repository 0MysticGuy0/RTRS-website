import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/App.css'

function Register(){
    return (
        <div className='page registration-page'>
            <Header/>

            <div className='registration-content'>
                <a className='registration__loginBtn' href='#'>Войти в кабинет</a>
            </div>

            <Footer/>
        </div>
    )
}

export default Register;