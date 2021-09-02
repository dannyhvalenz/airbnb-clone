import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/outline";
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left Section */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="http://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Middle Section */}
            <div className="flex items-center px-2 md:border-2 rounded-full py-2 ">
                <input
                    className="flex-grow pl-3 md:mr-2 bg-transparent outline-none "
                    type="text"
                    placeholder="Buscar"
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-pink-600 text-white rounded-full p-2 cursor-pointer" />
            </div>
            {/* Right Section */}
            <div className="flex items-center space-x-4 justify-end">
                <p className="text-sm hidden lg:inline-flex cursor-pointer rounded-full hover:bg-gray-100 py-2 px-3 ">Hazte anfitrión</p>
                <GlobeAltIcon className="h-10 text-gray-700 cursor-pointer rounded-full hover:bg-gray-100 p-2"/>

                <divc className="flex items-center space-x-2 rounded-full border-2 border-gray-200 p-2 cursor-pointer hover:shadow-sm">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </divc>
            </div>
        </header>
    );
}

export default Header;
