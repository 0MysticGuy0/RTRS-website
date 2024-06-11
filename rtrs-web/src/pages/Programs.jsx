import { useEffect, useMemo, useState } from 'react';
import Footer from '../components/footer/Footer';
import HeaderSmall from '../components/header/HeaderSmall';
import '../styles/App-authorized.css'
import NavPannel from '../components/NavPannel/NavPannel';
import MyInput from '../components/UI/MyInput/MyInput';
import ChannelProgram from '../components/channelProgramm/ChannelProgram';
import APIService from '../API/APIService';
import { useFetching } from '../hooks/useFetching';
import Loading from '../components/loading/Loading';

function Programs(){
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [search, setSearch] = useState('')

    const [channels, setChannels] = useState([])
    const [programs, setPrograms] = useState([])

    const sortedPrograms = useMemo(()=>{
        return programs.filter(p=> p.name.toLowerCase().includes(search.toLowerCase()) || p.tvChannel.name.toLowerCase().includes(search.toLowerCase()))
    },[search, programs])

    const formatteddate = useMemo(()=>{
        return selectedDate.toLocaleDateString("ru-RU")
    },[selectedDate])

    //fetchers
    const [fetchChannels, isLoadingChannels, channelsError] = useFetching(async () =>{
        const responce = await APIService.getAllTVChannels()
        //console.log('fetched ', responce)
        setChannels([...responce.data])
    })
    const [fetchPrograms, isLoadingPrograms, programsError] = useFetching(async () =>{
        const responce = await APIService.getAllTVProgramsByDate(formatteddate)
        console.log('fetched ', responce)
        setPrograms([...responce.data])
    })

    useEffect(()=>{
        fetchChannels()
        fetchPrograms()
    },[])

    useEffect(()=>{
        fetchPrograms()
    },[formatteddate])


    function changeDate(isNext){
        const koef = isNext? 1:-1
        setSelectedDate(new Date(selectedDate.getTime() + koef* 24 * 60 * 60 * 1000))
    }


    return (
        <div className='page programs-page'>
            <HeaderSmall/>

            <div className='page__content'>
                <NavPannel />

                <h2>Телепрограмма</h2>
                
                <div className='horizontalDiv'>
                    <div className='horizontalDiv' style={{flexGrow:1}}>
                        <button className='changeDateBtn' style={{'--rotate':'180deg'}} onClick={()=> changeDate(false)}/>
                        <div className='programs-page__date' onClick={()=>setSelectedDate(new Date())}>{formatteddate}</div>
                        <button className='changeDateBtn' onClick={()=> changeDate(true)}/>
                    </div>

                    <MyInput placeholder='поиск...' value={search} onChange={setSearch} />
                </div>
                <hr/>

               <div className='programs-page__channels'>
                    {isLoadingPrograms || isLoadingChannels?
                        <Loading/> :
                        programs.length==0?
                        <span style={{fontSize:'var(--part-size)'}}>Не найдено данных...</span> :

                        channels.map(ch => {
                            const tp = sortedPrograms.filter(p=> p.tvChannel.id == ch.id)
                            return (
                                    <ChannelProgram key={ch.id} channel={ch} programm={tp} />
                                )
                        })
                    }
               </div>
                
            </div>

            <Footer showFAQ={false}/>
        </div>
    )
}

export default Programs;