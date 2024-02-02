import React from 'react'
// import { Link } from 'react-router-dom'
import Link from 'next/link'

const page = () => {
  return (
    <div style={{backgroundColor:"red"}}>

        <h1>this is the login form</h1>
        <label>enter your name</label>
        <input  />
        <br></br>
        <br></br>
        <label>enter your email</label>
        <input />
        <br></br>
        <br></br>
        <label>enter your password</label>
        <input />
       {/* <Link href="/login">click</Link> */}

       <button>click</button>
       <Link href="/dashboard">click</Link>
    </div>
  )
}

export default page