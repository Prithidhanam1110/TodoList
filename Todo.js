import React, { useState } from "react";
import "../TodoList/Todo.css";
function Todoapp() {
    const [inputvalue, setInputValue] = useState(' ')
    const [todo, setTodo] = useState([])
    function handler(e) {
        setInputValue(e.target.value)
    }
    function getvalue(e) {
        e.preventDefault();
        setTodo(todo.concat({ id: todo.length, todo: inputvalue })
        )
    }
    function removeTask(index) {
        setTodo(prevState => {
            const todo = [...prevState];
            todo.splice(index, 1);
            return todo;
        });
    }
    return (
        <>
            <center>
                <div className="form-field">
                <input type="text" value={inputvalue} onChange={(e) => handler(e)} className="form_input"></input>
                <button onClick={(e) => getvalue(e)} className="form_input">Submit</button>
                </div>
                <div >

                    {
                        todo.map((ele,index) => {
                            return <div key={index} className='table'><div id="division_id" ><div id="ele_id">{ele.todo}</div>
                            <button onClick={() => removeTask(ele.id)} id="delete_id">Delete</button></div>
                            </div>
                        }
                        )
                    }
                </div>
            </center>
        </>
    )

}
export default Todoapp