import { useEffect, useMemo, useState } from 'react';
import Footer from '../components/footer/Footer';
import HeaderSmall from '../components/header/HeaderSmall';
import '../styles/App-authorized.css'
import NavPannel from '../components/NavPannel/NavPannel';
import { useLocation } from 'react-router-dom';
import Question from '../components/question/Question';
import MySelect from '../components/UI/MySelect/MySelect';
import Channel from '../components/channel/Channel';
import { useFetching } from '../hooks/useFetching';
import axios from 'axios';
import APIService from '../API/APIService';
import { type } from '@testing-library/user-event/dist/type';
import Appeal from '../components/appeal/Appeal';
import MyModal from '../components/UI/MyModal/MyModal';
import AppealDialog from '../components/AppealDialog/AppealDialog';
import Loading from '../components/loading/Loading';

function Appeals(){
    const [userData, setUserData] = useState({email:'bychkovskiyvlad05@gmail.com', password:'', name:'Влад', phone:'', address:'Благо', gender:''})
    const [filters, setFilters] = useState({type:1})
    const [creatingAppeal, setCreatingAppeal] = useState(false)

    const [appealStatuses, setAppealStatuses] = useState([])
    const [appealTypes, setAppealTypes] = useState([])
    const [appeals, setAppeals] = useState([])

    const sortedAppeals = useMemo(()=>{
        const res = appeals.filter(ap => filters.type == 1 || ap.status.id == filters.type)
        return res
    }, [filters, appeals])

    //fetchers
    const [fetchAppealStatuses, isLoadingStatuses, statusesError] = useFetching(async () =>{
        const responce = await APIService.getAllAppealStatuses()
        //console.log('fetched ', responce)
        setAppealStatuses([...responce.data])
    })
    const [fetchAppealTypes, isLoadingTypes, typesError] = useFetching(async () =>{
        const responce = await APIService.getAllAppealTypes()
        //console.log('fetched ', responce)
        setAppealTypes([...responce.data])
    })
    const [fetchAppeals, isLoadingAppeals, appealsError] = useFetching(async () =>{
        const responce = await APIService.getAllAppealsByEmail(userData.email)
        //console.log('fetched ', responce)
        setAppeals([...responce.data])
    })

    //initializers
    const statusesOptions = useMemo(()=>{
        return appealStatuses.map((st) => {return {value:st.id, name: st.name}})
    },[appealStatuses])
    const appealTypeOptions = useMemo(()=>{
        return appealTypes.map(at => {return {value:at.id, name:at.name}})
    })

    useEffect(()=>{
        fetchAppealStatuses()
        fetchAppeals()
        fetchAppealTypes()
    },[])
    //

    async function sendAppeal(appeal){
        setCreatingAppeal(false)
        const appType = appealTypes.filter(a => a.id == appeal.type)[0]
        const appStatus = appealStatuses.filter(a => a.id == appeal.status)[0]
        const createdAppeal = {...appeal, type: appType, status: appStatus}
        const responce = await APIService.sendAppeal(createdAppeal)
        setAppeals([...appeals, responce.data])
        console.log('created appeal: ', responce.data)
    }

    return (
        <div className='page appeals-page'>
            <HeaderSmall userData={userData}/>

            <MyModal visible={creatingAppeal} setVisible={setCreatingAppeal}>
                <AppealDialog userData={userData} setUserData={setUserData} typeOptions={appealTypeOptions}
                    sendAppeal={sendAppeal}/>
            </MyModal>

            <div className='page__content'>
                <NavPannel />

                <h2>Обращения</h2>

                <div className='horizontalDiv'>
                    <h3 style={{flexGrow:1}}>Мои обращения</h3>
                    <MySelect style={{width:'auto'}} defaultValue='статус обращений' value={filters.type} options={statusesOptions} onChange={val => setFilters({...filters, type:val})}/>
                    <button className='appeals-page__addBtn' onClick={()=>setCreatingAppeal(true)}>+</button>
                </div>
                <hr/>
                {
                    isLoadingAppeals?
                    <Loading /> :
                    sortedAppeals.map(a => (
                        <Appeal key={a.id} id={a.id} content={a.content} time={a.time} status={a.status.name} type={a.type.name} address={a.address} />
                    ))
                }
            </div>

            <Footer showFAQ={false}/>
        </div>
    )
}

export default Appeals;