import React from "react";
import ItemForm from "./ItemForm";

import "./NewItem.css";

const NewItem = () => {
    const onItemFormSubmitDataHandler = (enteredItemData) => {
        const itemData = {
            ...enteredItemData
        };
        console.log(itemData);

    }

    return (
        <div className={"new-item"}>
            <ItemForm onItemFormSubmitData={onItemFormSubmitDataHandler} />
        </div>
        )};

export default NewItem;