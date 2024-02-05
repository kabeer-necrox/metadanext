import React from 'react'
import Link from 'next/link'
const layout = () => {
  return (
    <div>
      <ul>
        <li>
            <Link href="/about">about</Link>
        </li>
        <li>
            <Link href="/login">login</Link>
        </li>
        <li>
            <Link href="/login/studentlogin">studentlogin</Link>
        </li>
      </ul>
    </div>
  )
}

export default layout
