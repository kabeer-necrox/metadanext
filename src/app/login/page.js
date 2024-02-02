import React from 'react'
import { Link } from 'react-router-dom'

const page = () => {
  return (
    <div>

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
       {/* <Link>click</Link> */}
    </div>
  )
}

export default page