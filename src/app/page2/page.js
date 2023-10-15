'use client'

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";


function App() {
    const SearchParams = useSearchParams()
    const password = SearchParams.get('Password')

    useEffect(() => {
        console.log('password >>>', password)
        console.log(bom3)
    })


    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [updateindex, setUpdateindex] = useState(null);
    const [updateinput, setUpdateinput] = useState(null);

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

    const updatetodo = (todo, index) => {
        setUpdateinput(todo)
        setUpdateindex(index);
    };

    const savetodo = (id) => {
        const newList = [...list]

        newList.map((obj) => {
            if (obj.id === id) {
                obj.todo = updateinput
            }
        })

        console.log('>>>>', newList)
        setList(newList)
        setUpdateindex(null)


    }

    return (
        <body style={{ backgroundImage: 'url(/background-react.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', fontSize: '20px', fontFamily: 'inherit' }}>
            <div className='flex justify-center'>
                <div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <div style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold' }}>TodoList</div><br></br>
                    <div>
                        <div style={{ backgroundColor: 'white', padding: '20px 40px', borderRadius: '10px', margin: '10px' }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)
                                } placeholder="Add todo"
                                style={{ height: '40px', width: '500px', outline: 'none', borderBottom: '2px solid #E8E6E6' }}
                            />&nbsp;&nbsp;
                            <button onClick={() => addTodo(input)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{ borderRadius: '10px', outline: 'none' }}>Add</button>
                        </div>
                        <br></br>
                        <div>
                            <ul>
                                {list.map((obj, index) => (
                                    <li key={obj.id} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px 10px', margin: '10px' }}>
                                        {updateindex === index ?
                                            <div className="flex justify-between pl-7">
                                                <input
                                                    type="text"
                                                    value={updateinput}
                                                    onChange={(e) => setUpdateinput(e.target.value)}
                                                    style={{ outline: 'none', display: 'flex', alignItems: 'center' }} />
                                                <button onClick={() => savetodo(obj.id)}><MdSaveAs size='2em' style={{ display: 'inline-block', color: 'white', backgroundColor: 'green', padding: '5px', borderRadius: '10px' }}></MdSaveAs>
                                                </button>
                                            </div> : <div className="flex justify-between pl-7">
                                                <div style={{ outline: 'none', display: 'flex', alignItems: 'center' }}>{obj.todo}</div>
                                                <div>
                                                    <button onClick={() => deleteTodo(obj.id)}>&nbsp;&nbsp;<AiFillDelete size='2em' style={{ display: 'inline-block', color: 'white', backgroundColor: 'red', padding: '5px', borderRadius: '10px' }}></AiFillDelete>
                                                    </button> &nbsp;&nbsp;&nbsp;
                                                    <button onClick={() => updatetodo(obj.todo, index)}><FaRegEdit size='2em' className="bg-blue-500" style={{ display: 'inline-block', color: 'white', padding: '5px', borderRadius: '10px' }}></FaRegEdit>
                                                    </button>
                                                </div>
                                            </div>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </body >
    );

}

export default App;