import style from "./NameItem.module.css";

const NameItem = (props) => {
    const deleteName = (e)=>{
        console.log(`${e.classList.toggle('hi')}`)
    }
  return (
    <li onClick={deleteName} className={style['li-style']}>
      <div className={style['div-style']}>
        <h2 className={style['h2-style']} >{props.name}</h2>
        <p className={style['p-style']}>{props.age}</p>
      </div>
    </li>
  )
};
export default NameItem;