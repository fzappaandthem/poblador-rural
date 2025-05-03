import React from 'react'
import { Link } from 'react-router-dom'
import { FcCollaboration } from "react-icons/fc";

/*
['cortes', 'pedidosSangre', 'lostFound', 'p2p', 'institucionales', 'eventos', 'thanks', 'reminders', 'misas', 'fallecimientos']
*/

/*
Categoría 1 (CORTES)
  Bright Yellow 

 Categoría 2 (PEDIDO-SANGRE)
  Soft Red 

Categoría 3 (PERDIDOS/ENCONTRADOS)
  Sky Blue 

Categoría 4 (PERSONA-A-PERSONA)
  Light Beige 

Categoría 5 (MENSAJE-OFICIAL)
  Steel Blue 
Categoría 6 (ACTIVIDAD-SOCIAL)
  Pale Green 
Categoría 7 (AGRADECIMIENTOS)
  Light Pink 

Categoría 8 (RECORDATORIOS)
  Dark Orange 

Categoría 9 (MISAS)
  Medium Purple 

Categoría 10 (FALLECIMIENTOS)
*/

const categoryClasses = {
    cortes: 'bg-yellow-100',
    pedidosSangre: 'bg-red-100',
    lostFound: 'bg-blue-100',
    p2p: 'bg-beige-100',
    institucionales: 'bg-sky-100',
    eventos: 'bg-green-100',
    thanks: 'bg-pink-100',
    reminders: 'bg-orange-100',
    misas: 'bg-purple-100',
    deaths: 'bg-grey-100',
  };

const bgClass = categoryClasses[listing.category] || 'bg-white'; // fallback

export default function ListingItem({listing}) {
  return (
    <div className={`shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-[330px] md:w-[660px] min-h-[80px] 
    ${bgClass}`}>
        <Link to={`/update-poblador/${listing._id}`}>
            <FcCollaboration className='mt-2 ml-2 h-4 w-4 text-green-700'/>
            <div className="p-3 flex flex-col gap-2 w-full">
                <p className='text-lg font-semibold w-[330px] md:w-[660px] min-h-[80px] text-slate-700'>{listing.recipient}</p>
                <div className="flex items-center gap-1">
                    <p className='text-sm text-gray-600 w-full'>{listing.cantRepeticiones}</p>
                </div>
                <p className='text-md text-gray-600 '>{listing.message}</p>
            </div>
        </Link>
        <br></br>
    </div>
  )
}
