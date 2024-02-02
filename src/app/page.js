import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="components">
      <User name="kabeer"/>
      {/* <User name="furqan"/> */}
      <User name="developer" age= "19" address="nyc"/>
      <User name="desiner"/>
      <User name="hacker"/>
      </div>
      
      <h1 className="pagehome">Home Page</h1>
      <p className="homepagepara">this is para</p>
      
    </main>
  );
}


const User =(props)=>{
  return(
    <>
    <h1>user name is {props.name}</h1>
    <p>this is { props.address} </p>
    <p>this is {props.age} </p>
    </>
  )
}