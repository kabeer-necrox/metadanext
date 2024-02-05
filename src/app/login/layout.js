import React from 'react'
import Link from 'next/link'
// import './css'
import './login.css'

const layout = ({children}) => {
  return (
    <div>
        <ul className='loginlayout'>
            <li>
            <h1>login Navbar</h1>
            </li>
            <li>
                <Link href="/login/studentlogin"> student login</Link>
            </li>
            <li>
                <Link href="/login/teacherlogin"> teacher login</Link>
            </li>
       
        </ul>
        {children}
      
    </div>
  )
}

export default layout
