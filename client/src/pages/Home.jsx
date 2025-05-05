import React from 'react'
import { useState, useEffect } from 'react';
import { getDddhhmmEmisionProximaSistema, getTimeWithColonFromDddhhmm, 
  getMonthFromDate, getDayFromDddhhmm, getFechaEmisionProximaSistema} from '../fechas-basic.js'
import ListingItem from './ListingItem.jsx';

export default function Home() {

  const [listings, setListings] = useState([]);

  const fechaActual = new Date( ) ;
  const hace45 = new Date ( ) ;

  hace45.setTime ( fechaActual.getTime() - 45 * 1000 * 60 ) ;

  const fechaEmisionProx = getFechaEmisionProximaSistema ( hace45 ) ;
  console.log("listings.map(l => l.fechaUltimaEmision)")
  console.log(listings.map(l => l.fechaUltimaEmision))
  const emisionDddhhmm = getDddhhmmEmisionProximaSistema( hace45 ) ;
  const hora = getTimeWithColonFromDddhhmm ( emisionDddhhmm ) ;


  const mes = getMonthFromDate ( fechaEmisionProx ) ;
  const diaSemana = getDayFromDddhhmm ( emisionDddhhmm ) ;
  const diaMes = hace45.getDate() ;
  
  
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
      
    }
  
    fetchMensajes();
  }, [] ) ;


  return (
      <div className="flex flex-col gap-6 p-28 px-3">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Mensajes al poblador rural del día <span className="text-slate-500"> { diaSemana } { diaMes } de { mes }  </span> { hora } horas
        </h1>

        {/*['cortes', 'pedidosSangre', 'lostFound', 'p2p', 'institucionales', 'eventos', 'thanks', 'fechaUltimaEmisionnders', 'misas', 'fallecimientos']*/}
        {listings && listings.length > 0 && listings.some(listing => listing.category === "cortes") && (
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
          <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
            <h3>Cortes</h3>
          </div>
            {
              
              listings.filter(l => l.category === 'cortes' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))
            }
          </div>
        )}
        {listings && listings.length > 0 && listings.some(listing => listing.category === "pedidosSangre") && (
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
          <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
            <h3>pedidos de sangre</h3>
          </div>
            {
              
              listings.filter(l => l.category === 'pedidosSangre' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))
            }
          </div>
        )}
        {listings && listings.length > 0 && listings.some(listing => listing.category === "lostFound") && (
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
          <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
            <h3>Objetos perdidos</h3>
          </div>
            {
              
              listings.filter(l => l.category === 'lostFound' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))
            }
          </div>
        )}

        {listings && listings.length > 0 && listings.some(listing => listing.category === "p2p") && (

        <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
          <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
            <h3>Persona a persona</h3>
            </div>
            {
              listings.filter(l => l.category === 'p2p' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                    <ListingItem key={listing._id} listing={listing} />
              ))
            }
        </div>
        )}

        {listings && listings.length > 0 && listings.some(listing => listing.category === "institucionales") && (
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
            <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
              <h3>Institucionales</h3>
            </div>
              {
                listings.filter(l => l.category === 'institucionales' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                  <ListingItem key={listing._id} listing={listing} />
                ))
              }
          </div>
        )}
                {/*['cortes', 'pedidosSangre', 'lostFound', 'p2p', 'institucionales', 'eventos', 'thanks', 'reminders', 'misas', 'fallecimientos']*/}
        {listings && listings.length > 0 && listings.some(listing => listing.category === "eventos") && (
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
            <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
              <h3>Eventos</h3>
            </div>
              {
                
                listings.filter(l => l.category === 'eventos' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                  <ListingItem key={listing._id} listing={listing} />
                ))
              }
          </div>
        )}
        {listings && listings.length > 0 && listings.some(listing => listing.category === "thanks") && (
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
            <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
              <h3>Agradecimientos</h3>
            </div>
              {
                
                listings.filter(l => l.category === 'thanks' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                  <ListingItem key={listing._id} listing={listing} />
                ))
              }
          </div>
        )}
        {listings && listings.length > 0 && listings.some(listing => listing.category === "reminders") && (
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
            <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
              <h3>Recordatorios</h3>
            </div>
            {
              
              listings.filter(l => l.category === 'reminders' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))
            }
          </div>
        )}

        {listings && listings.length > 0 && listings.some(listing => listing.category === "misas") && (
         <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
          <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
            <h3>Misas</h3>
          </div>
            {
              
              listings.filter(l => l.category === 'misas' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))
            }
          </div>
        )}
        {listings && listings.length > 0 && listings.some(listing => listing.category === "fallecimientos") && (
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
            <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
              <h3>Fallecimientos</h3>
            </div>
              {
                
                listings.filter(l => l.category === 'fallecimientos' && new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                  <ListingItem key={listing._id} listing={listing} />
                ))
              }
          </div>
        )}

        {listings && listings.length > 0 && (
          <div className="flex w-full flex-col gap-4 autofill:bg-slate-100">
          <div className="flex flex-col gap-6 ml-auto mr-auto mt-10">
              {
                listings.filter(l => new Date (l.fechaUltimaEmision) >= fechaEmisionProx.getTime() - 1 * 60 * 1000 && new Date (l.createdAt) <= fechaEmisionProx.getTime() + 15 * 60 * 1000 ).map((listing) => (
                  console.log(`fecha ultima emisión\n ${listing.fechaUltimaEmision} >= ${fechaEmisionProx} : \n ${listing}\n ${listing.createdAt}\n`)
                ))
              }
          </div>
          </div>
        )}



        {/* listings.map((listing) => (
                      <div className="w-1/3" >{listing.recipient}</div>
                    )) */}
      </div>
  )
}
