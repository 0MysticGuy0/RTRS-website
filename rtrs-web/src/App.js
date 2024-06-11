import { useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import MyModal from './components/UI/MyModal/MyModal';
import { AppContext } from './context/AppContext';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/App.css';
import APIService from './API/APIService';

function App() {
  const [userData, setUserData] = useState({email:"", gender:"M"})
  const [authed, setAuthed] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      const log = async ()=>{
        const responce = await APIService.login(localStorage.getItem("email"), localStorage.getItem("password"))  
      console.log('updated |App.js| ', responce)
      setUserData(responce.data)

      setAuthed(true)
      }
      log()
    }
  },[])

  return (
    <AppContext.Provider
    value={{
      userData, setUserData, authed, setAuthed
    }}>
      <div className="App">
          <AppRouter/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
