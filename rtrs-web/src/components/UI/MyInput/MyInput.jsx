import styles from './MyInput.module.css'

function MyInput({placeholder, type='text', value, onChange, ...params}){
    return(
            <input className={styles.myInput} {...params} type={type} value={value} placeholder={placeholder} onChange={inp => onChange(inp.target.value)}/>
    )
}

export default MyInput;