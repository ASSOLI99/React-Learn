import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
  const  [enteredTitle,setEnteredTitle]=useState('');
  const  [enteredAmount,setEnteredAmount]=useState('');
  const  [enteredDate,setEnteredDate]=useState('');
// const [userInput, setUserInput]=useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// });
    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value);
        // setUserInput({
        //    ...userInput,
        //    enteredTitle: e.target.value,
        // })
    }
    
    const AmountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        //  })
    }
   
    const DateChangeHandler=(e)=>{
        setEnteredDate(e.target.value);
    //     setUserInput({
    //         ...userInput,    
    //         enteredDate: e.target.value,
    //      })
     }
     const submitHandler= (e)=>{
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
     }
    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input onChange={titleChangeHandler} value={enteredTitle} type="text" />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input onChange={AmountChangeHandler} type="number" value={enteredAmount} min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input onChange={DateChangeHandler} type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" />
            </div>
            <div className='new-expense__actions'>
                
                <button type="submit">edit</button>
            </div>
        </div>
    </form>);
}
export default ExpenseForm;