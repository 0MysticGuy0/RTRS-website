import React, { useEffect, useMemo } from "react";
import styles from './ChannelProgram.module.css'

function ChannelProgram({channel, programm}){

    const rootStyles = [styles.channelProgram]
    if(programm.length==0){
        rootStyles.push(styles.disabled)
    }


    function getTimefromDate(date){
        const d = new Date(date)
        const h = d.getHours()
        const m = d.getMinutes()
        return (h<10?'0'+h:h) + ":" + (m<10?'0'+m:m)
    }

    const iconPath = useMemo(()=>{
        if (channel.name=='ТНТ'){
            return '/tnt.png'
        }else if (channel.name=='СТС'){
            return '/ctc.png'
        }else if (channel.name=='НТВ'){
            return '/ntv.png'
        }else if (channel.name=='Домашний'){
            return '/domashny.png'
        }else if (channel.name=='Пятница'){
            return '/pyatnica.png'
        }else if (channel.name=='ТВ3'){
            return '/tv3.png'
        }
        else{
            return '/match_tv.png'
        }
    },[])

    return (
        <div className={rootStyles.join(' ')}>
            <div className={styles.top}>
                <img className={styles.logo} src={iconPath} alt='логотип' width='35px'/>
                <span>{channel.name}</span>
            </div>

            <table>
                <tbody>
                    {
                        programm.map(el => (
                            <tr key={el.id}>
                                <td className={styles.bold}>{getTimefromDate(el.time)}</td>
                                <td >{el.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ChannelProgram;