import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
function InfoCard({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    long,
    lat,
}) {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <div className="flex p-5 cursor-pointer rounded-xl hover:opacity-80 hover:shadow-md transition ease-out duration-200">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    className="rounded-lg"
                    src={img}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">{location}</p>
                    <HeartIcon
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`cursor-pointer h-8 lg:h-10 hover:bg-gray-100 rounded-full p-2 text-gray-500 ${
                            isFavorite && "fill-current text-red-500"
                        }`}
                    />
                </div>
                <h4 className="font-semibold text-md md:text-lg lg:text-2xl">
                    {title}
                </h4>

                <div className="border-b w-10 pt-2"></div>

                <p className="pt-2 text-sm text-gray-500 flex-grow">
                    {description}
                </p>

                <div className="flex justify-between">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-500" />
                        {star}
                    </p>

                    <div>
                        <p className="text-lg lg:text-2xl font-bold">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
