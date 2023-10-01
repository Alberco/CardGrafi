import { HomeIcon, LogoIcon, MailsIcon, MenuIcon, MonitorsIcon, PagesIcon, SettingsIcon } from "../Icons/Icons"
import Search from "./Search"

function Navbar() {
  return (
        <>
          <nav className="hidden lg:grid place-content-between grid-cols-3 bg-[#17171C] py-4 ">
            <ul className="grid grid-cols-6 gap-2 place-items-start px-4">
                <li className=" col-span-1 border-2 border-transparent bg-[#1F2125]/90 px-4 py-3 rounded-md">
                  <LogoIcon  style=""/>
                </li>
                <li className=" col-span-5  bg-[#1F2125]/90 px-4 py-1 rounded-md">
                  <ul className="flex gap-6 items-center  ">
                    <li className="border-2 border-transparent hover:bg-[#17171C] px-2 py-2 rounded-md"><HomeIcon style=""/></li>
                    <li className="border-2 border-transparent hover:bg-[#17171C] px-2 py-2 rounded-md"><SettingsIcon style=""/></li>
                    <li className="border-2 border-transparent hover:bg-[#17171C] px-2 py-2 rounded-md"><PagesIcon style=""/></li>
                    <li className="border-2 border-transparent hover:bg-[#17171C] px-2 py-2 rounded-md"><MonitorsIcon style=""/></li>
                    <li className="border-2 border-transparent hover:bg-[#17171C] px-2 py-2 rounded-md"><MailsIcon style=""/></li>
                  </ul>
                </li>
            </ul>
            <ul className="grid grid-cols-1">
                <li className="grid grid-cols-1 place-items-center w-full">
                    <form className="relative">
                      <span className="absolute inset-y-0 left-2 flex justify-center flex-col z-0 ">
                        <Search style=""  />
                      </span>
                      <input type="text" name="" id="" placeholder="Search" className="bg-[#1F2125]/90 pl-8 py-2 w-[20rem] z-40 rounded-md text-white focus:outline-none focus:border-gray-400/50 border-[1px] border-transparent " />
                    </form>
                </li>
            </ul>
            <ul className="grid grid-cols-1">
              <li className="flex flex-wrap md:flex-nowrap justify-end px-4 gap-4 ">
                <div>
                  <p className="text-white font-medium">Adam Green</p>
                  <p className="text-gray-400">hello@laya.desing</p>
                </div>
                <img src="/user.jpg" alt="user" width={50} height={30} className=" rounded-md" />
              </li>
            </ul>
          </nav>
          <nav className="grid place-content-between grid-cols-3 bg-[#17171C] py-4 lg:hidden">
            <ul className="grid grid-cols-1 gap-2 place-items-start px-4">
                <li className=" col-span-1 border-2 border-transparent bg-[#1F2125]/90 px-2 py-2 rounded-md">
                  <LogoIcon  style=""/>
                </li>
            </ul>
            <ul className="grid grid-cols-1">
                <li className="grid grid-cols-1 place-items-center w-full">
                    <form className="relative">
                      <span className="absolute inset-y-0 left-2 flex justify-center flex-col z-0 ">
                        <Search style=""  />
                      </span>
                      <input type="text" name="" id="" placeholder="Search" className="bg-[#1F2125]/90 pl-8 py-1 w-full z-40 rounded-md text-white focus:outline-none focus:border-gray-400/50 border-[1px] border-transparent " />
                    </form>
                </li>
            </ul>
            <ul className="flex justify-end pr-4">
              <li className="border-2 border-transparent bg-[#1F2125]/90 px-2 py-2 rounded-md ">
                <MenuIcon style="" />
              </li>
            </ul>
          </nav>
        </>
  )
}

export default Navbar