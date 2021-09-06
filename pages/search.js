import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns"
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
function Search({ searchResults }) {
    const router = useRouter();

    const {location, startDate, endDate, noOfGuest} = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMM yyyy");
    const formattedEndDate = format(new Date(endDate), "dd MMM yyyy");
    const placeholderStartDate = format(new Date(startDate), "dd MMM");
    const placeholderEndDate = format(new Date(endDate), "dd MMM");
    const range = `${formattedStartDate} al ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${placeholderStartDate} - ${placeholderEndDate} | ${noOfGuest} húespedes`}/>
            <main className="flex"> 
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs text-gray-500">300+ alojamientos - {range} - para {noOfGuest} húespedes</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Alojamientos en <span className="capitalize">
                        {location}</span></h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 whitespace-nowrap">
                        <p className="button">Flexibilidad de cancelación</p>
                        <p className="button">Tipo de alojamiento</p>
                        <p className="button">Precio</p>
                        <p className="button">Más filtros</p>
                    </div>

                    <div className="flex flex-col gap-y-4">
                    { searchResults.map(({img, location, title, description, star, price, total, long, lat}, index) => (
                        <div>
                            <div className="border-b w-full pt-5"></div>
                            <InfoCard 
                            key={index}
                            img={img} 
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                            long={long}
                            lat={lat}
                        />
                        </div>
                    ))}
                    </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px] max-h-screen sticky top-14">
                    <Map searchResults={searchResults}/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps () {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())

    return {props: {searchResults}}
}