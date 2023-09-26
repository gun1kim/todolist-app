import PropTypes from 'prop-types';

function ToDoItem({text}) {
    return (
        <p>{text}</p>
    )
}

ToDoItem.propTypes = {
    text: PropTypes.string
}

export default ToDoItem;