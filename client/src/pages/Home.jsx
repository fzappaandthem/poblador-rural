import React from 'react'

export default function Home() {

  

  return (
    <div>
      {/* Top page  */}
      <div className="flex flex-col gap-6 p-28 px-3">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Pobladores rurales del día <span className="text-slate-500">domingo 18 de febrero</span><br/>  21 horas
        </h1>
        <div className="text-slate-900 text-xs sm:text-xl font-semibold ">
          A quien va dirigido
        </div>
        <div className="text-slate-900 text-xs sm:text-lg">
          Aca va el detalle de cada uno de los mensajes al poblador rural
          Aca va el detalle de cada uno de los mensajes al poblador rural
          Aca va el detalle de cada uno de los mensajes al poblador rural
          Aca va el detalle de cada uno de los mensajes al poblador rural
          Aca va el detalle de cada uno de los mensajes al poblador rural
        </div>
        {/* <Link to={'/search'} className="text-xs sm:text-sm text-blue-800 font-bold hover:underline">
          Vamos a encontrarla...
        </Link> */}
      </div>
    </div>
  )
}
