import "./Card.css";

// Notes ::
//
// Creation of UI component the Card class - may need to change in the future - depending on needs just wanted to get
// this up to begin addressing the separation of concern.


const Card = (props) => {

    // create a string that has all the classNames passed by props to include on stylizing everything wrapped inside
    // our Card element
    const classes = 'card ' + props.className;

    return (
        // props.children is reserved - must use this to pass css classnames to children of components wrapped inside
        // the Card element
        <div className={classes}>{props.children}</div>
    )
};

export default Card;