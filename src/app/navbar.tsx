import Link from 'next/link';
import Image from 'next/image';
export default function Navbar()
{
    return(
        <div className="navbar bg-black to-zinc-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-white bg-black hover:bg-slate-600 border-black hover:border-black   lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-gray-400 shadow text-white  rounded-box w-52">
            <li className=" "><Link href="./">Home</Link></li>
         
         <li className=" " ><Link href={"/post"}>Posts</Link></li>
         <li className=" "><Link href={"/states"}>Statistics</Link></li>
         <li className=" "><Link href={"/testimonals"}>Testimonals</Link></li>
         <li className=" "><Link href={"/contact"}>Contact</Link></li>
       
            </ul>
          </div>
          <div className=" uppercase font-light text-xl text-white"><Link href="./">MyWeb</Link></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex  menu-horizontal px-1 gap-6  ">
            <li className="text-white gap-6 hover:text-orange-500"><Link href="./">Home</Link></li>
         
             <li className="text-white gap-6 hover:text-orange-500" ><Link href={"/post"}>Posts</Link></li>
             <li className="text-white gap-6 hover:text-orange-500"><Link href={"/states"}>Statistics</Link></li>
             <li className="text-white gap-6 hover:text-orange-500"><Link href={"/test"}>Testimonals</Link></li>
             <li className="text-white gap-6 hover:text-orange-500"><Link href={"/contact"}>Contact</Link></li>
           
          </ul>
        </div>
        <div className="navbar-end">
        <div className=" rounded-full ">
    <Image src="/ico.png"
    alt="avat"
    height={50}
    width={50}
    className='rounded-full'
    />
  </div>
          </div>
      </div>
    )
}