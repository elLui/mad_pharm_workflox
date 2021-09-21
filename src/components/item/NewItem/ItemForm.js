import React, {useState} from "react";

import "./ItemForm.css";

const ItemForm = () => {
    // // Practice multi useState() approach for working with multiple states which fit a common purpose
    //
    // // 1. construct our 2 item deconstructed array from useState()
    // const [userInput, setUserInput] = useState({
    //     // 2. create an object made of the different pieces of state we need to keep track of
    //     enteredName: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    // // 3. change the handler events to reflect the new source of 'state'
    // const nameChangeHandler = (event) => {
    //     setUserInput({
    //         // 4. when updating state from an object we need to ensure that all states in the object are declared
    //         // or you will loose that data - this can be done with the ...userInput - which carries through all
    //         // the current variable values
    //         ...userInput,
    //         enteredDate: event.target.value,
    //     })
    // }
    // const itemAmountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value
    //     })
    // }
    //
    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value
    //     })
    // }
    //
    // // End of multi useState() use example // commented out until needed

    // Going with single state for the time being.

    // Three sets of state so far in controlling a new item added to the list
    const [enteredName, setEnteredName] = useState('');
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = useState('');
    const itemAmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const [enteredDate, setEnteredDate] = useState(new Date());
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };


    return (
        <form>
            <div className="new-item__controls">
                <div className="new-item__control">
                    <label>item_name</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>
                <div className="new-item__control">
                    <label>item_amount</label>
                    <input type={"number"} min={"0.01"} step={"0.01"} onChange={itemAmountChangeHandler}/>
                </div>
                <div className={"new-item__control"}>
                    <label>item_date</label>
                    <input type={"Date"} min={"2019-01-01"} max={"2022-12-31"} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={"new-item__actions"}>
                <button type={"submit"}>Add Item</button>
            </div>
        </form>

    )
}

export default ItemForm;