import NameItem from "./NameItem";
import styles from "./Name.module.css";

const Name=(props)=>{
   
    return (<div className={styles['ul-father-style']}>
       <ul className={styles['ul-style']}>
        {props.data.map((name) => <NameItem
            key={name.id}
            name={name.name}
            age={name.age}
          />
        )}
        </ul>
    </div>)
}
export default Name;