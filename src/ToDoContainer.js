import PropTypes from 'prop-types';

function ToDoContainer({list}) {
    return (
        <div>
            <h3>todo-list</h3>
            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

ToDoContainer.propTypes = {
    list: PropTypes.array
}

export default ToDoContainer;