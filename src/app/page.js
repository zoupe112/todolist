'use client'
import { Main } from 'next/document'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, Fragment } from 'react'
import "./Main.css";

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

    router.push('/page2?Password=' + password)

  }




  return (
    <>
      <div className='bg-blue-500 flex justify-center flex items-center bg-gradient-to-r from-cyan-500 to-blue-500' style={{ fontFamily: 'inherit', height: '100vh', textAlign: 'center', fontWeight: 'bold' }
      }>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50px', padding: '50px', backdropFilter: 'blur(5px)' }}>
          <h1 style={{ fontSize: '48px', color: 'white' }}>Login</h1>
          <br></br>
          <input class type="text" name="name" className='input rounded-md'
            value={name} placeholder='Username'
            onChange={(e) => {
              console.log(e.target.value)
              let input = e.target.value
              setName(input)
            }}
            style={{ outline: 'none' }}
          />
          {nameError == null ? null : nameError}
          <br></br><br></br>
          <input type='text' name="Password" className='input rounded-md'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              let input = e.target.value
              setPassword(input)
            }}
            style={{ outline: 'none' }}
          />
          <br></br><br></br>
          {passwordError == null ? null : passwordError}
          <button onClick={() => submit()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md'>Login</button><br></br><br></br>
        </div>
      </div>
    </>
  )
}
// save