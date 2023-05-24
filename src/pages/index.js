import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import Counter from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className=" h-screen w-screen bg-cover bg-no-repeat" style={{backgroundImage:" url('/bgImage.jpg')"}}>
       
       <nav className="flex   p-3 items-center w-full  h-auto border rounded-lg mx-2 border-white ">
          <Image
            src="/profilePic.jpg"
            width={50}
            height={50}
            className="rounded-full "
          />
          <h1 className="mx-2 font-bold ">Farhan Khan </h1>
          <div className="flex space-x-4  text-blue-500 pt-1 w-10/12  justify-end font-extrabold ml-8 h-8 pr-4">
            <a href="#" className="rounded-md bg-white w-20 pl-3">
              Home
            </a>
            <a href="#" className="rounded-md bg-white w-20 pl-3">
              About
            </a>
            <a href="#" className="rounded-md bg-white pl-2 w-20">
              Contact
            </a>
          </div>
        </nav>
       
        {/* <Image src="/bgImage.jpg" width={300} height={400}></Image> */}
        
        <div className=" flex items-center h-4/6  font-bold   border-gray-200 rounded-lg m-2 shadow">
          <div className=" border-2 m-10 h-2/4  rounded-lg shadow-2xl border-white  flex-col content-center w-2/6 p-4">
                  <h1> Counter using useState</h1>        <Counter/>
</div>
          <div className=" border-2 m-10 h-2/4 rounded-lg shadow-2xl border-white justify-center w-2/6 p-4">My Assignment on NextJs hello World first div ldjfjsdfljdlfjdjfjfj</div>
          <div className=" border-2 m-10 h-2/4 rounded-lg shadow-2xl border-white justify-center w-2/6 p-4">My Assignment on NextJs hello World first div ldjfjsdfljdlfjdjfjfj</div>
         </div> 

        <footer className="flex  fixed bottom-0 bg-slate-100 w-full h-12 px-2 ">
          <h1> Footer Section</h1>
        </footer>
        
      </main>
      
    </>
  );
}
