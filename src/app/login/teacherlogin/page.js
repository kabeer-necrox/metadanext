import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='teacherlogin'>
        <h1>Register your data</h1>
      <h1>this portal is for teacher</h1>
      <form>
        <input placeholder='enter your name' />
        <br />
        <br />
        <input placeholder='enter your email' />
        <br />
        <br />
        <input placeholder='enter your passwaord' />
      </form>
      <br />
      <br />
      <Link href="/dashboard" className='teachbtn'>click here</Link>
    </div>
  )
}

export default page
