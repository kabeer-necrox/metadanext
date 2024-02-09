
// import productlist from './productlist/page'
// import Link from "next/link";
// {'use client'}

import Image from "next/image";
import profile from '../../public/vercel.svg'
import myimg from "../../public/next.svg"

export default function Home() {
  console.log(profile)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    
     <h1>check this</h1>
      <image 
      src={profile.src}
      width={500}
      height={500}
       />
      

      <image src='https://plus.unsplash.com/premium_photo-1707413391465-82ac03dd5555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8' />
      
    </main>
  );
}
