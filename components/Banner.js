import Image from "next/image";
import Header from "./Header";
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-screen">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">
                    ¿No sabes a donde ir? No importa
                </p>
                <button className="bg-white text-purple-500 font-bold my-3 rounded-full shadow-md px-10 py-4 hover:shadow-xl active:scale-90 transition duration-150">
                    Soy Flexible
                </button>
            </div>
        </div>
    );
}

export default Banner;
