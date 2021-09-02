import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Components */}
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="">
          <h2 className="pt-8 pb-4 text-2xl md:text-3xl lg:text-4xl font-semibold">Descubre alojamientos cerca de ti</h2>

          {/* Obtener datos del servidor - API Endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          { exploreData?.map(({img, location, distance}, index) => (
            <SmallCard 
              key={index}
              img={img} 
              location={location} 
              distance={distance}
            />
          ))}
          </div>
          
        </section>

        <section>
          <h2 className="pt-8 pb-4 text-2xl md:text-3xl lg:text-4xl font-semibold">Vive en cualquier lugar del mundo</h2>

          {/* Obtener datos del servidor - API Endpoints */}
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
          { cardsData?.map(({img, title}, index) => (
            <MediumCard 
              key={index}
              img={img} 
              title={title}
            />
          ))}
          </div>
        </section>
        
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

// Static Rendering - Esto sucede en el servidor
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return { props: { exploreData, cardsData } };
}
