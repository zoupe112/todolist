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




    const [list, setList] = useState([]);
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [updateindex, setUpdateindex] = useState(null);
    const [updateinput1, setUpdateinput1] = useState(null);
    const [updateinput2, setUpdateinput2] = useState(null);

    const [listuser, setListuser] = useState([]);
    const [api, setApi] = useState([]);
    const [apiOld, setApiOld] = useState([]);

    useEffect(() => {
        bom()
    }, [updateindex])

    const bom = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        /* fetch("https://localhost:7115/admin/Info", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setApi(result.data.listInfo)
                    console.log(api)
                }); */
        let respone = await fetch("https://localhost:7115/admin/Info", requestOptions)
        let json = await respone.json()
        console.log(json)
        let ee = await json.data
        setApi(ee.listInfo)
        setApiOld(ee.listInfo)
        console.log("tttt", api)
    }


    /*     const bom22 = async () => {
    
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
    
        } */

    const addTodo = (input) => {
        if (topic == "" || description == "") {
            alert('Add text');
            return
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var raw = JSON.stringify({
            "topic": topic,
            "descirption": description
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:7115/admin/Info/create", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status = 'success') {
                    bom()
                    setTopic("")
                    setDescription("")
                }
            })
            .catch(error => console.log('error', error));
    };

    const deleteTodo = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://localhost:7115/admin/Info/delete/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status = 'success') {
                    bom()
                }
            })
            .catch(error => console.log('error', error));
    };

    const edittodo = (index) => {
        setUpdateindex(index)
    }

    const updatetodo = (topic, descirption, index, id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var raw = JSON.stringify({
            "topic": topic,
            "descirption": descirption
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:7115/admin/Info/update/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status = 'success') {
                    bom()
                }
            })
            .catch(error => console.log('error', error));

        setUpdateindex(null)
    };

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center font-mono h-screen text-xl bg-full" >
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1 className="text-center text-3xl font-bold text-white">TodoList<br></br>{name}</h1><br></br>
                <div className="bg-white px-10 py-5 rounded-xl m-2.5">
                    <input
                        type="text"
                        name="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)
                        } placeholder="Add topic"
                        className="h-10 w-[500px] outline-none border-b border-b-stone-300 mr-10 w-[500px]"
                    />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)
                        } placeholder="Add description"
                        className="h-10 w-[500px] outline-none border-b border-b-stone-300 mr-10 w-[500px]"
                    />
                    <button onClick={() => addTodo(topic, description)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl outline-none mr-5">Add</button>
                    {/*                     <button onClick={() => bom2()} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl outline-none mr-5">GET</button>
 */}                </div>
                <br></br>
                <div>
                    <ul>
                        {api.map((obj, index) => {
                            console.log(obj);
                            return <li key={obj.id} className="bg-white p-[10px] m-[10px] rounded-xl">

                                {updateindex == index ? <div className="flex justify-between pl-7 items-center outline-none">
                                    <div class="flex-col basis-full">
                                        <input
                                            type="text"
                                            value={obj.topic}
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                let oldTopic = [...apiOld]
                                                console.log("topic", oldTopic)

                                                oldTopic[index].topic = e.target.value
                                                console.log("topiccc", oldTopic)

                                                setApi(oldTopic)
                                            }}
                                            className=" flex alignitems-center w-[20%] font-bold text-2xl mb-2 border-b border-b-stone-300 text-l" />
                                        <div>
                                            <input
                                                type="text"
                                                value={obj.descirption}
                                                /* onChange={(e) => {
                                                    console.log(e.target.value)
                                                    let oldDescirption = [...apiOld]
                                                    console.log("descirption", oldDescirption)
        
                                                    oldDescirption[index].descirption = e.target.value
                                                    console.log("descirptionnn", oldDescirption)
        
                                                    setApi(oldDescirption)
                                                }} */
                                                className=" flex alignitems-center border-b border-b-stone-300 w-[99%]" />
                                        </div>
                                    </div>

                                    <div className="basis-1/12 justify-items-end">
                                        <button onClick={() => updatetodo(obj.id, obj.topic, obj.descirption, index)}><MdSaveAs size='2em' className="bg-green-500 inline-block text-white p-[5px] rounded-xl mr-4"></MdSaveAs>
                                        </button>
                                    </div>
                                </div>
                                    :
                                    <div className="flex justify-between pl-7 items-center outline-none">
                                        <div class="flex-col basis-full">
                                            <input
                                                type="text"
                                                value={obj.topic}
                                                className=" flex alignitems-center w-[20%] pointer-events-none font-bold text-2xl mb-2 items-start text-l align-top" />
                                            <div><input
                                                type="text"
                                                value={obj.descirption}
                                                className=" flex alignitems-center w-[99%] pointer-events-none" /></div>
                                        </div>
                                        <div class="basis-1/12 justify-items-start">
                                            <button onClick={() => edittodo(index)}><FaRegEdit size='2em' className="bg-blue-500 inline-block text-white p-[5px] rounded-xl m-0.5"></FaRegEdit>
                                            </button>

                                            <button onClick={() => deleteTodo(obj.id)}><AiFillDelete size='2em' className="bg-red-500 inline-block text-white p-[5px] rounded-xl "></AiFillDelete>
                                            </button>
                                        </div>
                                    </div>
                                }
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div >
    );

}

export default App;
// save