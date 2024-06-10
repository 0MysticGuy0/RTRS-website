import styles from './MyTextArea.module.css'

function MyTextArea({placeholder, value, onChange, ...params}){
    return(
            <textarea className={styles.myInput} {...params} value={value} placeholder={placeholder} onChange={inp => onChange(inp.target.value)}/>
    )
}

export default MyTextArea;