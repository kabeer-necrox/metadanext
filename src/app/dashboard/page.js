import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div style={{backgroundColor:"yellow"}}>
        
        <h1>this is the Dashboard</h1>
        <h2>this is our e-commers web</h2>
        <p>we provide varites of servies</p>
        <Link href="/about">about</Link>
        <br />
        <Link href="/login">login</Link>

        <br />
        <Link href="/login/teacherlogin">teacher login</Link>
    </div>
  )
}

export default page