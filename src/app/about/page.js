import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>this is about page</h1>
      <p>pattern for make routes in next js</p>
      <p>we do't need to instill exteral file in next js</p>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default page
