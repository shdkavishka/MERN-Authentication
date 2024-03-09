import React from 'react'
import axios from 'axios'

function Login() {

    const loginuser = (e) => {
        e.preventDefault();
        // console.log("Login Successfull");
        axios.get('/')
    }
  return (
    <div>
      <h1>Login page</h1>
      <form action="" onSubmit={loginuser}>
        <label htmlFor="">Enter Email...</label>
        <input type="Email" placeholder='Enter Email...' />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter password...' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
