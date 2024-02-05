// {'use client'}
import Link from 'next/link'
// import {} from 'next/navigation'
const page = () => {

  // const router = userRouter();
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
        <label>enter your password</label>
        <input />
  
       <Link href="/dashboard">click</Link>
       <br /> 
       <br />
       <Link href="/login/studentlogin">student login</Link>
    </div>
  )
}

export default page