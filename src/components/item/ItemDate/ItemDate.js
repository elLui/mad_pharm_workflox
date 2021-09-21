import "./ItemDate.css";

//
const ItemDate = (props) => {

    const month = props.date.toLocaleString("en-US", {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", {day: '2-digit'});


    return (
        <div className="item-date">
            <div className="item-date__month">{month}</div>
            <div className="item-date__year">{year}</div>
            <div className="item-date__day">{day}</div>
        </div>
    )
}

export default ItemDate;