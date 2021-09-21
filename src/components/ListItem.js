import "./ListItem.css";
import Card from "./UI/Card";
import ItemDate from "./item/ItemDate/ItemDate";
import {useState} from "react";


const ListItem = (props) => {
    const [item_name, setItemName] = useState(props.item_name);
    const itemNameClickHandler = () => {

        setItemName('updated!');
        console.log(item_name);

    }



    return (
        <Card className="list-item">
            <ItemDate date={props.item_date} />
            <div className="list-item__name">
                <h1>{item_name}</h1>
            </div>
            <ul>
                <li>item_id :: {props.item_id}</li>
                <li>item_name :: {props.item_name}</li>
                <li>item_quantity :: {props.item_quantity}</li>
                <li className="list-item__cost">item_cost :: {props.item_cost}</li>
                <li>item_source :: {props.item_source}</li>
                <li>item_source_id :: {props.item_source_id}</li>
                <li>item_count_on_hand :: {props.item_count_on_hand}</li>
                <li>item_min :: {props.item_min}</li>
                <li>item_max :: {props.item_max}</li>
                <li>item_description :: {props.item_description}</li>
            </ul>
            <button onClick={itemNameClickHandler} >Change Title</button>
        </Card>
    );
}

export default ListItem;