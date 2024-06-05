import React from "react";
import styles from './MySelect.module.css'

function MySelect({defaultValue, options, value, onChange}){
    return(
    <select className={styles.mySelect} value={value} onChange={e => onChange(e.target.value)}>
        <option disabled>{defaultValue}</option>
        {
            options.map(o => <option key={o.value} value={o.value}>{o.name}</option>)
        }    
    </select>)
}

export default MySelect;