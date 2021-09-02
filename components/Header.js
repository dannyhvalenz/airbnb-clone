import Image from "next/image";
import {useState, useEffect} from "react"
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/outline";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuest, setNoOfGuest] = useState(1);
    const [showErrorSearch, setShowErrorSearch] = useState(false);
    const [isOnTop, setIsOnTop] = useState(true);
    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    useEffect(() => {
        window.onscroll = () =>
            window.pageYOffset === 0 ? setIsOnTop(true) : setIsOnTop(false);

        return () => (window.onscroll = null);
    });

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = (e) => {
        e.preventDefault();
        setSearchInput("");
    }

    const handleInputChange = (e) => {
        setShowErrorSearch(false);
        setSearchInput(e.target.value);
    }

    const search = () => {
        if (searchInput !== ""){
            router.push({
                pathname:'/search',
                query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuest,
                }
            })
            setSearchInput("");
        } else {
            setShowErrorSearch(true);
        }
        
    }

    
    return (
        <header className={`sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ${ !isOnTop && "text-gray-700"}`}>
            {/* Left Section */}
            <div 
                onClick={() => router.push("/")}
                className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="/static/logo2.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Middle Section */}
            <div className={`flex items-center px-2 md:border-2 rounded-full py-2 ${ showErrorSearch ? "border-red-700" : "text-gray-700"}`}>
                <input
                    value={searchInput}
                    onChange={handleInputChange}
                    className="flex-grow pl-3 md:mr-2 bg-transparent outline-none capitalize"
                    type="text"
                    placeholder={placeholder || "Buscar"}
                />
                <SearchIcon 
                    onClick={search}
                    className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer" />
            </div>
            {/* Right Section */}
            <div className="flex items-center space-x-4 justify-end">
                <p className="text-sm hidden lg:inline-flex cursor-pointer rounded-full hover:bg-gray-100 py-2 px-3 ">Hazte anfitrión</p>
                <GlobeAltIcon className="h-10 cursor-pointer rounded-full hover:bg-gray-100 p-2"/>

                <divc className="flex items-center space-x-2 rounded-full border-2 border-gray-200 p-2 cursor-pointer hover:shadow-sm">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </divc>
            </div>

            { searchInput && (
                <div className="flex flex-col col-span-3 mx-auto text-black bg-white py-3 px-5 rounded-xl mt-3">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#f04344"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-xl flex-grow font-semibold">Número de personas</h2>
                        <UsersIcon className="h-5"/>
                        <input 
                            value={noOfGuest}
                            onChange={(e)=> setNoOfGuest(e.target.value)}
                            min={1}
                            type="number"
                            placeholder="1"
                            className="w-20 pl-2 text-lg outline-none text-center text-red-500"
                        />
                    </div>
                    <div className="flex">
                        <button 
                            onClick={resetInput}
                            className="flex-grow px-3 text-gray-400 py-2 rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out">
                                Cancelar
                        </button>
                        <button 
                            onClick={search}
                            className="flex-grow text-red-500 px-3 py-2 rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out">
                                Buscar
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
