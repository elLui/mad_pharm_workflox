import './App.css';
import ListItem from "./components/ListItem";
import NewItem from "./components/item/NewItem/NewItem";


function App() {

    function RandomNumber() {
        return Math.floor((Math.random() * 100) + 1);
    };
    function randomDate(start = new Date(2020,0, 1), end = new Date()) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }


    const itemList = [
        {
            item_id: RandomNumber(), item_name: "Some Name Dude - a", item_quantity: 0, item_cost: 0.00, item_source: "",
            item_source_id: "123-4567", item_count_on_hand: 0, item_min: 0, item_max: 10, item_description: "whut",
            item_date: randomDate()
        },
        {
            item_id: RandomNumber(), item_name: "Some Name Dude - b", item_quantity: 0, item_cost: 0.00, item_source: "",
            item_source_id: "123-4567", item_count_on_hand: 0, item_min: 0, item_max: 10, item_description: "whut",
            item_date: randomDate()
        },
        {
            item_id: RandomNumber(), item_name: "Some Name Dude - c", item_quantity: 0, item_cost: 0.00, item_source: "",
            item_source_id: "123-4567", item_count_on_hand: 0, item_min: 0, item_max: 10, item_description: "whut",
            item_date: randomDate()
        },
        {
            item_id: RandomNumber(), item_name: "Some Name Dude - d", item_quantity: 0, item_cost: 0.00, item_source: "",
            item_source_id: "123-4567", item_count_on_hand: 0, item_min: 0, item_max: 10, item_description: "whut",
            item_date: randomDate()
        }

    ];

    return (
        <div className="App">
            <header className="App-header">
                <NewItem />

                <ListItem
                    item_id={itemList[0].item_id}
                    item_name={itemList[0].item_name}
                    item_quantity={itemList[0].item_quantity}
                    item_cost={itemList[0].item_cost}
                    item_source={itemList[0].item_source}
                    item_source_id={itemList[0].item_source_id}
                    item_count_on_hand={itemList[0].item_count_on_hand}
                    item_min={itemList[0].item_min}
                    item_max={itemList[0].item_max}
                    item_description={itemList[0].item_description}
                    item_date={itemList[0].item_date}
                />
                <ListItem
                    item_id={itemList[1].item_id}
                    item_name={itemList[1].item_name}
                    item_quantity={itemList[1].item_quantity}
                    item_cost={itemList[1].item_cost}
                    item_source={itemList[1].item_source}
                    item_source_id={itemList[1].item_source_id}
                    item_count_on_hand={itemList[1].item_count_on_hand}
                    item_min={itemList[1].item_min}
                    item_max={itemList[1].item_max}
                    item_description={itemList[1].item_description}
                    item_date={itemList[1].item_date}
                />
                <ListItem
                    item_id={itemList[2].item_id}
                    item_name={itemList[2].item_name}
                    item_quantity={itemList[2].item_quantity}
                    item_cost={itemList[2].item_cost}
                    item_source={itemList[2].item_source}
                    item_source_id={itemList[2].item_source_id}
                    item_count_on_hand={itemList[2].item_count_on_hand}
                    item_min={itemList[2].item_min}
                    item_max={itemList[2].item_max}
                    item_description={itemList[2].item_description}
                    item_date={itemList[2].item_date}
                />
                <ListItem
                    item_id={itemList[3].item_id}
                    item_name={itemList[3].item_name}
                    item_quantity={itemList[3].item_quantity}
                    item_cost={itemList[3].item_cost}
                    item_source={itemList[3].item_source}
                    item_source_id={itemList[3].item_source_id}
                    item_count_on_hand={itemList[3].item_count_on_hand}
                    item_min={itemList[3].item_min}
                    item_max={itemList[3].item_max}
                    item_description={itemList[3].item_description}
                    item_date={itemList[3].item_date}
                />

            </header>
        </div>
    );
}

export default App;
