import {useEffect, useState} from "react";

import {todosServise} from "../../services/todosServise";
import {Todo} from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosServise.getAll().then(({data})=>setTodos(data))
    }, []);


    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo} />)}
        </div>
    );
};

export {Todos};