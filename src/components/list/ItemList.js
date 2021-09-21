import React from "react";

import ListItem from "../ListItem";
import Card from "../UI/Card";
import "./ItemList.css";

const ItemList = (props) => {

    return(
        <Card className="items" >

            <ListItem
                item_id={props.items[0].item_id}
                item_name={props.items[0].item_name}
                item_quantity={props.items[0].item_quantity}
                item_cost={props.items[0].item_cost}
                item_source={props.items[0].item_source}
                item_source_id={props.items[0].item_source_id}
                item_count_on_hand={props.items[0].item_count_on_hand}
                item_min={props.items[0].item_min}
                item_max={props.items[0].item_max}
                item_description={props.items[0].item_description}
                item_date={props.items[0].item_date}
            />
            <ListItem
                item_id={props.items[1].item_id}
                item_name={props.items[1].item_name}
                item_quantity={props.items[1].item_quantity}
                item_cost={props.items[1].item_cost}
                item_source={props.items[1].item_source}
                item_source_id={props.items[1].item_source_id}
                item_count_on_hand={props.items[1].item_count_on_hand}
                item_min={props.items[1].item_min}
                item_max={props.items[1].item_max}
                item_description={props.items[1].item_description}
                item_date={props.items[1].item_date}
            />
            <ListItem
                item_id={props.items[2].item_id}
                item_name={props.items[2].item_name}
                item_quantity={props.items[2].item_quantity}
                item_cost={props.items[2].item_cost}
                item_source={props.items[2].item_source}
                item_source_id={props.items[2].item_source_id}
                item_count_on_hand={props.items[2].item_count_on_hand}
                item_min={props.items[2].item_min}
                item_max={props.items[2].item_max}
                item_description={props.items[2].item_description}
                item_date={props.items[2].item_date}
            />
            <ListItem
                item_id={props.items[3].item_id}
                item_name={props.items[3].item_name}
                item_quantity={props.items[3].item_quantity}
                item_cost={props.items[3].item_cost}
                item_source={props.items[3].item_source}
                item_source_id={props.items[3].item_source_id}
                item_count_on_hand={props.items[3].item_count_on_hand}
                item_min={props.items[3].item_min}
                item_max={props.items[3].item_max}
                item_description={props.items[3].item_description}
                item_date={props.items[3].item_date}
            />
        </Card>
    )
}

export default ItemList;