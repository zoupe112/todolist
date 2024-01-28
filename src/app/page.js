'use client'
import { Main } from 'next/document'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, Fragment, ReactDOM } from 'react'
import "./Main.css";
import { FaRegUserCircle } from "react-icons/fa";
import Pass from './components/name_password'

export default function Home() {

  const router = useRouter()

  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)

  const [nameError, setNameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  const Submitlogin = () => {

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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": name,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://localhost:7115/account/User/SignIn", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === 'success') {
          alert('Login success')
          localStorage.setItem("token", result.data);
          router.push('/page2?name=' + name + '&Password=' + password)
        }
        else {
          alert('Login failed')
        }
      })
    /* .catch(error => console.log('error', error)); */
  }

  const Submitregis = () => {
    if (name == null) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return
    }

    if (password == null) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": name,
      "password": password,
      "role": 10
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://localhost:7115/account/User/Register", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === 'success') {
          alert('Regis success')
          closepopup()
        }
        else {
          alert('Regis failed')
        }
      })
  }

  const popup = () => {
    Register.style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')

  }

  const closepopup = () => {
    Register.style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
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
          <br></br>
          <input type='password' name="Password" className='input rounded-md'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              let input = e.target.value
              setPassword(input)
            }}
            style={{ outline: 'none' }}
          />
          {passwordError == null ? null : passwordError}
          <button onClick={() => Submitlogin()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md my-5'>Login</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md transition" onClick={() => popup()}>
            Register
          </button>
        </div>
        <div id="Register" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
          <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

            <div class="flex justify-end p-2">
              <button onclick="closeModal('modelConfirm')" type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <svg onClick={() => closepopup()} class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>

            <div class="p-6 pt-0 text-center">
              <FaRegUserCircle class="w-20 h-20 text-sky-500 mx-auto" />
              <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Register</h3>
              <input id="username" type="text" placeholder="Username" class=" my-3 text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => {
                  console.log(e.target.value)
                  let input = e.target.value
                  setName(input)
                }} />
              <input id="password" type="password" placeholder="Password" class=" text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => {
                  let input = e.target.value
                  setPassword(input)
                }} />
              <br></br>
              <button onClick={() => Submitregis()}
                class=" my-3 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                Sign up
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
// save