import React, { useContext, useEffect, useState } from 'react';
import '../styles/App-authorized.css'
import Footer from '../components/footer/Footer';
import HeaderSmall from '../components/header/HeaderSmall';
import NavPannel from '../components/NavPannel/NavPannel';
import { AppContext } from '../context/AppContext';
import MyInput from '../components/UI/MyInput/MyInput';
import MySelect from '../components/UI/MySelect/MySelect';
import APIService from '../API/APIService';

function UserSettings(){
    const {userData, setUserData} = useContext(AppContext)
    const [userDataCopy, setuserDataCopy] = useState({email:""})

    useEffect(()=>{
        setuserDataCopy({...userData})
    }, [userData])

    function hasChanged(){
        for(const key in userDataCopy){
            if(userData[key] != userDataCopy[key]){
                console.log(userData[key],' ||| ',userDataCopy[key])
                return true
            }
        }
        return false
    }

    async function save(){
        setUserData({...userDataCopy})
        const responce = await APIService.updateUser(userDataCopy)
        console.log(responce)
    }

    return (
        <div className='page settings-page'>
            <HeaderSmall/>

            <div className='page__content'>
                <NavPannel />

                <h2>Настройки</h2>

                <table className='settings-page__table'>
                    <tbody>
                        <tr>
                            <td className="bold">Электронная почта</td>
                            <td style={{flexGrow:'1'}}> <MyInput  required type='text' placeholder='email@gmail.com' value={userDataCopy?.email} onChange={val => {}}/> </td>
                        </tr>
                        <tr>
                            <td className="bold">Имя</td>
                            <td> <MyInput style={{width:'100%'}} type='text' placeholder='имя' value={userDataCopy.name} onChange={val => setuserDataCopy({...userDataCopy, name:val})}/> </td>
                        </tr>
                        <tr>
                            <td className="bold">Пол</td>
                            <td> <MySelect defaultValue='Пол' value={userDataCopy.gender} onChange={val => setuserDataCopy({...userDataCopy, gender:val})}
                                options={[{value:'M', name:'Мужской'}, {value:'F', name:'Женский'}]}/> </td>
                        </tr>
                        <tr>
                            <td className="bold">Номер телефона</td>
                            <td> <MyInput type='tel' placeholder='89000000000' value={userDataCopy.phone_number} onChange={val => setuserDataCopy({...userDataCopy, phone_number:val})}/> </td>
                        </tr>
                        <tr>
                            <td className="bold">Адрес</td>
                            <td> <MyInput type='tel' placeholder='' value={userDataCopy.address} onChange={val => setuserDataCopy({...userDataCopy, address:val})}/> </td>
                        </tr>
                    </tbody>
                </table>
            

                <button disabled={!userDataCopy?.email?.length>0 || !hasChanged()} className="blueBtn"
                onClick={(e) => {
                    e.preventDefault()
                    save()
                }}>
                    Сохранить
                </button>
                
                
            </div>

            <Footer showFAQ={false}/>
        </div>
    )
}

export default UserSettings;