import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import ToDoContainer from "./ToDoContainer";


function Form() {
    let [input, setInput] = useState("");
    let [todoList, setTodoList] = useState([]);
    const onChange = (event) => setInput(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        setTodoList([input, ...todoList]);
    }

    return (
        <form onSubmit={onSubmit}>
            <Input value={input} onChange={onChange} />
            <Button />
            <hr />
            <ToDoContainer list={todoList} />
        </form>
    )
}
export default Form;