import { useMemo, useState } from 'react';
import Footer from '../components/footer/Footer';
import HeaderSmall from '../components/header/HeaderSmall';
import '../styles/App-authorized.css'
import NavPannel from '../components/NavPannel/NavPannel';
import { useLocation } from 'react-router-dom';
import Question from '../components/question/Question';
import MySelect from '../components/UI/MySelect/MySelect';
import Channel from '../components/channel/Channel';

function ObjectsInfo(){
    const [userData, setUserData] = useState({email:'', password:'', name:'Влад', phone:'', address:'', gender:''})
    const [filters, setFilters] = useState({location:'', type:''})

    const locations = [{id:0, name: 'Амурская обл.'},{id:1, name: 'Тамбовский р-н'},{id:2, name: 'Ивановский р-н'}]
    const types = [{id:0, name: 'ТВ и радио'},{id:1, name: 'ТВ'},{id:2, name: 'Радио'}]
    const data=[{id:0, name: 'РТРС-1 (+6), ТРМ - Амурский', TVC: 34, frequency: 578, type:1},
        {id:1, name: 'РТРС-1 (+6), ТРМ - Амурский', TVC: 34, frequency: 578, type:1},
        {id:2, name: 'РТРС-1 (+6), ТРМ - Амурский', TVC: 34, frequency: 578, type:1},
    ]

    const locationOptions = useMemo(()=>{
        return locations.map((l) => {return {value:l.id, name: l.name}})
    },[locations])
    const typeOptions = useMemo(()=>{
        return types.map((l) => {return {value:l.id, name: l.name}})
    },[locations])

    return (
        <div className='page objects-info-page'>
            <HeaderSmall userData={userData}/>

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
                        data.map(ch => (
                            <Channel key={ch.id} name={ch.name} TVC={ch.TVC} frequency={ch.frequency} />
                        ))
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ObjectsInfo;