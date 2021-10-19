import styles from './Input.module.css';

function Input(props){
    return <div className={styles.input}>
        <label>{props.label}</label>
        <input {...props.input}></input>
    </div>
}
export default Input;