import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("Home component rendered");
  return (
    <>
     <h1>Welcome to nextjs</h1>
   <Hello />
    </>
  
  );
}
