function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600 bg-gray-100">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="uppercase font-bold">Acerca de</h5>
                <p>Cómo funciona Airbnb</p>
                <p>Sala de prensa</p>
                <p>Airbnb 2021</p>
                <p>Inversores</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="uppercase font-bold">Comunidad</h5>
                <p className="w-52">Esto es un proyecto clon de Airbnb</p>
                <p className="w-52">Busca mostrar mis capacidades como desarrollador</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="uppercase font-bold">Anfitrión</h5>
            <p>Hospeda en tu alojamiento</p>
            <p>Ofrece una Experiencia en línea</p>
            <p>Ofrece una Experiencia</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="uppercase font-bold">Asistencia</h5>
            <p>Nuestra respuesta ante el COVID-19</p>
            <p>Centro de ayuda</p>
            <p>Opciones de cancelación</p>
            <p>Ayuda para vecinos</p>
            <p>Confianza y seguridad</p>
            </div>
        </div>
    )
}

export default Footer
