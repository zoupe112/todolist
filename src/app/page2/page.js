'use client'

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";



function App() {
    const SearchParams = useSearchParams()
    const password = SearchParams.get('Password')

    useEffect(() => {
        console.log('password >>>', password)
        console.log(bom3)
    })


    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    function bom() {


    }

    const bom2 = () => {

        return

    }

    const bom3 = () => "bom3"




    const addTodo = (x) => {



        const newTodo = {
            id: Math.random(),
            todo: x,
        };
        console.log("bom", newTodo)
        console.log("bom2", ...list)
        // add the todo to the list
        setList([...list, newTodo]);

        // clear input box
        setInput("");
    };

    const deleteTodo = (id) => {
        // Filter out todo with the id
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    };

    const updatetodo = (id) => {
        return (
            <input type="text" onChange={(e) => todo(e.target.value)}></input>

        )
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => addTodo(input)}>Add</button>
            <ul>
                {list.map((obj) => (
                    <li key={obj.id}>
                        {obj.todo}
                        <button onClick={() => deleteTodo(obj.id)}>&nbsp;&nbsp;   Delete</button>
                        <button onClick={() => updatetodo(obj.id)}>&nbsp;&nbsp;   Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;