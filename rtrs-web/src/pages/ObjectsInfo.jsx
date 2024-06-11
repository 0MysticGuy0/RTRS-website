import { useContext, useEffect, useMemo, useState } from 'react';
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
import Loading from '../components/loading/Loading';
import { AppContext } from '../context/AppContext';

function ObjectsInfo(){
    const {userData, setUserData} = useContext(AppContext)

    const [filters, setFilters] = useState({location:'1', type:'All'})

    const types = [{value:"All", name: 'ТВ и радио'},{value:"TV", name: 'ТВ'},{value:"Radio", name: 'Радио'}]

    const [translationObjects, setTranslationObjects] = useState([])
    const [channels, setChannels] = useState([])

    const sortedChannels = useMemo(()=>{
        const res = channels.filter(ch => filters.type=== 'All' || !(Boolean(ch.tvc) ^ filters.type=== 'TV'))
                            .filter(ch => 
                                ch.translationObjects.map(to => String(to.id)).includes(String(filters.location)) )
        return res
    }, [filters, channels])

    //fetchers
    const [fetchTranslationObjects, isLoadingTranslationObjects, translationObjectsError] = useFetching(async () =>{
        const responce = await APIService.getAllTranslationObjects()
        //console.log('fetched ', responce)
        setTranslationObjects([...responce.data])
    })
    const [fetchChannels, isLoadingChannels, ChannelsError] = useFetching(async () =>{
        const responce = await APIService.getAllChannels()
        console.log('fetched ', responce)
        setChannels([...responce.data])
    })

    //initializers

    const locationOptions = useMemo(()=>{
        return translationObjects.map((to) => {return {value:to.id, name: to.name}})
    },[translationObjects])
    const typeOptions = useMemo(()=>{
        return types.map((t) => {return {value:t.value, name: t.name}})
    },[types])

    useEffect(()=>{
        fetchTranslationObjects()
        fetchChannels()
    },[])

    return (
        <div className='page objects-info-page'>
            <HeaderSmall/>

            <div className='page__content'>
                <NavPannel />

                <h2>Работа объектов вещания</h2>

                <div className='verticalDiv'>
                    <h3 className='drawable-left' style={{'--imgSize':'40px'}}>Адрес местоположения приемного оборудования</h3>
                    <strong className='bigNormalText'>Амурская область, благовещенск</strong>
                </div>

                <Question question='ИНФОРМАЦИЯ ПО ПРОФИЛАКТИКАМ И ВНЕПЛАНОВЫМ ОСТАНОВКАМ' answer='Информация по профилактикам и внеплановым остановкам отсутствует'/>
                <hr/>

                <div className='verticalDiv'>
                    <h3 className='drawable-left' style={{backgroundImage:'url(\'/radio.svg\')'}}>Объекты вещания</h3>
                    <div className='horizontalDiv'>
                        <MySelect style={{flexGrow:1}} defaultValue='положение' value={filters.location}
                            options={locationOptions} onChange={val =>setFilters({...filters, location:val})}/>
                        <MySelect style={{width:'20%'}} defaultValue='тип сингнала' value={filters.type}
                            options={typeOptions} onChange={val =>setFilters({...filters, type:val})}/>
                    </div>

                    {
                        isLoadingChannels?
                        <Loading/> :
                        sortedChannels?.map(ch => (
                            <Channel key={ch.id} name={ch.name} TVC={ch.tvc ?? '-'} frequency={ch.frequency} />
                        ))
                    }
                </div>
            </div>

            <Footer showFAQ={false}/>
        </div>
    )
}

export default ObjectsInfo;