'use client'
import { Main } from 'next/document'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, Fragment, ReactDOM } from 'react'
import "./Main.css";
import Pass from './components/name_password'

export default function Home() {

    const router = useRouter()

    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)

    const [nameError, setNameError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)


    useEffect(() => {
        bom()
    }, []);


    const bom = () => {
        console.log('bom')

        localStorage.setItem("bom", "1234")
        localStorage.setItem("token", "1234")


        localStorage.setItem("bom22", "1234567")




    }
    const submit = () => {

        console.log('nameeee', name)
        console.log('password', password)


        //todo 

        if (name == null) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return
        }

        if (password == null) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return
        }
        router.push('/page2?name=' + name + '&Password=' + password)
    }


    return (
        <>
            <div className='bg-blue-500 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 font-sans font-bold text-center h-screen'>
                <div className='flex flex-col rounded-3xl p-14 backdrop-blur-sm bg-white/20' >
                    <h1 className='text-5xl text-white' >Login</h1>
                    <input type="text" name="name" className='input rounded-md my-5'
                        value={name} placeholder='Username'
                        onChange={(e) => {
                            console.log(e.target.value)
                            let input = e.target.value
                            setName(input)
                        }}
                        style={{ outline: 'none' }}
                    />
                    {nameError == null ? null : nameError}

                    <input type='text' name="Password" className='input rounded-md'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => {
                            let input = e.target.value
                            setPassword(input)
                        }}
                        style={{ outline: 'none' }}
                    />
                    {passwordError == null ? null : passwordError}
                    <button onClick={() => submit()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md my-5'>Login</button>
                </div>
            </div>
        </>
    )
}
// save