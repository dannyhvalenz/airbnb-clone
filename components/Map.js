import ReactMapGL , {Marker, Popup}from 'react-map-gl'
import { useState } from 'react'
import { getCenter } from 'geolib'
import Image from 'next/image'
function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState({})

    // Transformar el objeto searchResults a un objeto {latitude: 19.555 , longitude: -96.405 }
    const coordenadas = searchResults.map((item) => ({
        // retorna un objeto cada vez que encuentra un objeto
        longitude: item.long,
        latitude: item.lat
    }))

    const center = getCenter(coordenadas);

    const [viewport, setViewport] = useState({
        width: '100%',
        height:'100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    const handleSelected = (item) => {
        setSelectedLocation(item)
        console.log(selectedLocation);
    }

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/dannyhvalenz98/ckt86gesq3m4b18n1rfyv6t2m'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport)=> setViewport(nextViewport)}>
            {searchResults.map((result) => (
                <div key={result.long}>
                    
                    { selectedLocation.long === result.long ?
                        (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                            className="m-2 px-2 block z-50"
                        >
                            <p>{result.title}</p>
                            <p>{result.price}</p>
                        <button className="bg-red-500 text-white mt-2 px-2 rounded-lg">Ir a propiedad</button></Popup>) :
                        <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}>
                            <p className="bg-white px-2 rounded-xl py-1 cursor-pointer font-bold hover:bg-gray-100 shadow-md"
                            onClick={()=> handleSelected(result)}
                            role="img"
                            aria-label="map-marker"
                            >
                              {result.price} </p>
                    </Marker>
                    }
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
