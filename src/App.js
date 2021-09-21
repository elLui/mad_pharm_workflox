import './App.css';
import NewItem from "./components/item/NewItem/NewItem";
import ItemList from "./components/list/ItemList";


function App() {

    //—— Helper Functions ——//
    // generate a random number for item_id field data in itemList[] test array
    function RandomNumber() {
        return Math.floor((Math.random() * 100) + 1);
    };

    // generate a random Date for item_date field data in itemList[] test array
    function randomDate(start = new Date(2020, 0, 1), end = new Date()) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    };
    //** Helper Functions **//


    const itemList = [
        {
            item_id: RandomNumber(),
            item_name: "Some Name Dude - a",
            item_quantity: 0,
            item_cost: 0.00,
            item_source: "",
            item_source_id: "123-4567",
            item_count_on_hand: 0,
            item_min: 0,
            item_max: 10,
            item_description: "whut",
            item_date: randomDate()
        },
        {
            item_id: RandomNumber(),
            item_name: "Some Name Dude - b",
            item_quantity: 0,
            item_cost: 0.00,
            item_source: "",
            item_source_id: "123-4567",
            item_count_on_hand: 0,
            item_min: 0,
            item_max: 10,
            item_description: "whut",
            item_date: randomDate()
        },
        {
            item_id: RandomNumber(),
            item_name: "Some Name Dude - c",
            item_quantity: 0,
            item_cost: 0.00,
            item_source: "",
            item_source_id: "123-4567",
            item_count_on_hand: 0,
            item_min: 0,
            item_max: 10,
            item_description: "whut",
            item_date: randomDate()
        },
        {
            item_id: RandomNumber(),
            item_name: "Some Name Dude - d",
            item_quantity: 0,
            item_cost: 0.00,
            item_source: "",
            item_source_id: "123-4567",
            item_count_on_hand: 0,
            item_min: 0,
            item_max: 10,
            item_description: "whut",
            item_date: randomDate()
        }

    ];

    return (
        <div className="App">
            <header className="App-header">
                <NewItem/>
                <ItemList items={itemList}/>
            </header>
        </div>
    );
}

export default App;
