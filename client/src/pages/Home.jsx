import React from 'react'
import { useState, useEffect } from 'react';
import { getDddhhmmEmisionProximaSistema, getTimeWithColonFromDddhhmm, 
  getMonthFromDate, getDayFromDddhhmm, getFechaEmisionProximaSistema} from '../fechas-basic.js'
import ListingItem from './ListingItem.jsx';

export default function Home() {

  const [listings, setListings] = useState([]);

  const listingsConFechas = listings.map( l => ({...l, fechaUltimaEmision: new Date( l.fechaUltimaEmision ) } ) )


  const fechaActual = new Date( ) ;
  const hace45 = new Date (  ) ;

  hace45.setTime ( fechaActual.getTime() - 45 * 1000 * 60 ) ;

  const fechaEmisionProx = getFechaEmisionProximaSistema ( hace45 ) ;
  console.log("fechaEmisionProx")
  console.log(fechaEmisionProx.toUTCString())
  // const filtradas = listings.filter(l => l.fechaUltimaEmision >= fechaEmisionProx.toUTCString());
  console.log("listings.map(l => l.fechaUltimaEmision)")
  console.log(listings.map(l => l.fechaUltimaEmision))
  const emisionDddhhmm = getDddhhmmEmisionProximaSistema( hace45 ) ;
  const hora = getTimeWithColonFromDddhhmm ( emisionDddhhmm ) ;


  const mes = getMonthFromDate ( fechaEmisionProx ) ;
  const diaSemana = getDayFromDddhhmm ( emisionDddhhmm ) ;
  const diaMes = hace45.getDate() ;
  // const [listings, setListings] = useState([]);
  
  
  useEffect(() => {

    const urlParams = new URLSearchParams();
    urlParams.set('emision', emisionDddhhmm);

    const fetchMensajes = async () => {
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      
      if(!res.ok){
        console.log(data.message);
        return;
      }
      setListings(data);
      // setLoading(false);
      
    }
  
    fetchMensajes();
  }, [] ) ;


  //filter((item) => item.fechaUltimaEmision >= fechaEmisionProx)

  return (
    <div>
      {/* Top page  
      <div className="text-slate-900 text-xs sm:text-xl font-semibold ">
          A quien va dirigido
        </div>
        <div className="text-slate-900 text-xs sm:text-lg">
          Aca va el detalle de cada uno de los mensajes al poblador rural
          Emision: { emisionDddhhmm }
        </div>
        
        
                        <div className="my-3">
                  Mensajes
              </div>
        */}
      <div className="flex flex-col gap-6 p-28 px-3">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Mensajes al poblador rural del día <span className="text-slate-500"> { diaSemana } { diaMes } de { mes }  </span> { hora } horas
        </h1>
        

        {listings && listings.length > 0 && (
              <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">

                <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
                  {
                    listings.filter(l => new Date ( l.fechaUltimaEmision ) >= fechaEmisionProx ).map((listing) => (
                      <ListingItem key={listing._id} listing={listing} />
                    ))
                  }
                </div>
              </div>
            )}

        {/* listings.map((listing) => (
                      <div className="w-1/3" >{listing.recipient}</div>
                    )) */}
      </div>
    </div>
  )
}
