function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 px-32 py-14 text-gray-600 bg-gray-100">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="uppercase font-bold">Desarrollo</h5>
                <p>ReactJS</p>
                <p>NextJS</p>
                <p>TailwindCSS</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="uppercase font-bold">Comunidad</h5>
                <p className="w-52">Esto es un proyecto clon de Airbnb</p>
                <p className="w-52">Busca mostrar mis capacidades como desarrollador</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="uppercase font-bold">Asistencia</h5>
            <p>Daniela Hernández Valenzuela</p>
            <p>Desarrollador React</p>
            <p>dannyhvalenz@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer
