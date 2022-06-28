import Form from "./Form";
const NewName=(props)=>{
    const saveNameDataHandler = (enteredNameData) => {
        const nameData = {
          ...enteredNameData,
          id: Math.random().toString(),
        };
        props.onAddName(nameData);
      };
    return (
        <>
        <Form onSaveNameData={saveNameDataHandler} />
      </>
    )
}
export default NewName;