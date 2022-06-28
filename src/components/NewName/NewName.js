import Form from "./Form";
import styles from "./NewName.module.css";
const NewName=(props)=>{
    const saveNameDataHandler = (enteredNameData) => {
        const nameData = {
          ...enteredNameData,
          id: Math.random().toString(),
        };
        props.onAddName(nameData);
      };
    return (
        <div className="new-expense">
        <Form onSaveNameData={saveNameDataHandler} />
      </div>
    )
}
export default NewName;