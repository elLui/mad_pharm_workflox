import React, { useState } from "react";

import "./ItemForm.css";

const ItemForm = () => {
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
                    <input type="text" onChange={nameChangeHandler} />
                </div>
                <div className="new-item__control">
                    <label>item_amount</label>
                    <input type={"number"} min={"0.01"} step={"0.01"} onChange={itemAmountChangeHandler} />
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

        )}

export default ItemForm;