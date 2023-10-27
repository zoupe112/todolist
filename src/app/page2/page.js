'use client'

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, ReactDOM } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";
import Pass from "../components/name_password";

function App() {
    const SearchParams = useSearchParams()
    const password = SearchParams.get('Password')
    const name = SearchParams.get('name')
    const [test, setTest] = useState(password);

    useEffect(() => {
        console.log('password >>>', password)
        console.log(bom3)
        console.log('Username >>>', name)
    })


    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [updateindex, setUpdateindex] = useState(null);
    const [updateinput, setUpdateinput] = useState(null);
    const [listuser, setListuser] = useState([]);
    function bom() {


    }

    const bom2 = () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://653aa7712e42fd0d54d4475a.mockapi.io/api/user", requestOptions)
            .then(response => response.text())
            .then(result => setListuser([result]))
            .catch(error => console.log('error', error));
    }

    const bom22 = async () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let respone = await fetch("https://653aa7712e42fd0d54d4475a.mockapi.io/api/user", requestOptions)

        console.log("rrrrrr", respone)
    }

    const bom222 = async () => {

        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            let respone = await fetch("https://653aa7712e42fd0d54d4475a.mockapi.io/api/user", requestOptions)

            console.log("rrrrrr", respone)

        } catch (error) {
            console.log("erorrr", error)
        }

    }

    const bom3 = () => "bom3"




    const addTodo = (x) => {
        if (input == "") {
            alert('Add text');
            return
        }
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
        if (updateinput == "") {
            alert('Add text');
            return
        }
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
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center font-sans h-screen text-xl" >
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1 className="text-center text-3xl font-bold text-white">TodoList{name}<Pass passw={test} /></h1><br></br>
                <div className="bg-white px-10 py-5 rounded-xl m-2.5">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)
                        } placeholder="Add todo"
                        className="h-10 w-[500px] outline-none border-b border-b-stone-300 mr-10 w-[500px]"
                    />
                    <button onClick={() => addTodo(input)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl outline-none mr-5">Add</button>
                    <button onClick={() => bom2()} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{ borderRadius: '10px', outline: 'none' }}>GET</button>
                </div>
                <br></br>
                <div>
                    <ul>
                        {listuser.map((result) => (
                            <div>{result}</div>
                        ))}
                        {list.map((obj, index) => (
                            <li key={obj.id} className="bg-white p-[10px] m-[10px] rounded-xl">
                                {updateindex === index ?
                                    <div className="flex justify-between pl-7 items-center">
                                        <input
                                            type="text"
                                            value={updateinput}
                                            onChange={(e) => setUpdateinput(e.target.value)}
                                            className="outline-none flex alignitems-center border-b border-b-stone-300 w-[81%]" />
                                        <button onClick={() => savetodo(obj.id)}><MdSaveAs size='2em' className="inline-block text-white bg-green-500 p-[5px] rounded-xl mr-4" ></MdSaveAs>
                                        </button>
                                    </div>
                                    : <div className="flex justify-between pl-7 items-center">
                                        <div className="outline-none flex alignitems-center border-b border-b-stone-300 w-[81%]">{obj.todo}</div>
                                        <div>
                                            <button onClick={() => deleteTodo(obj.id)}>&nbsp;&nbsp;<AiFillDelete size='2em' className="inline-block text-white bg-red-600 p-[5px] rounded-xl mr-5"></AiFillDelete>
                                            </button>
                                            <button onClick={() => updatetodo(obj.todo, index)}><FaRegEdit size='2em' className="bg-blue-500 inline-block text-white p-[5px] rounded-xl mr-4"></FaRegEdit>
                                            </button>
                                        </div>
                                    </div>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );

}

export default App;
// save